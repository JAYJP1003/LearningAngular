import { Component, OnInit, ChangeDetectorRef, ViewChild, AfterViewInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';
import { RoomsService } from './roomsServices/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, AfterViewInit {

  hotelName:string = "JP's Hotel";
  noOfRooms:number = 10;
  hideRooms:boolean = false;
  flag:boolean = true;
  selectedRooms!:RoomList;
  headingForHidden:String = "hidden";

  // When static is true: the child component instance is available in ngOnInit.
  // When static is false or not provided: the child component instance is available in ngAfterViewInit.
  @ViewChild(HeaderComponent, {static:true}) headerComponent !: HeaderComponent;

  roomsList:RoomList[] = [];

  //We can do like this, but it is not preferred way, so we willl use dependeny injection
  //by creating new instance of the service from constructor.
  // roomsService:RoomsService = new RoomsService();

  constructor(private cdr: ChangeDetectorRef, private roomsService:RoomsService) {
    this.roomsList = this.roomsService.getRooms();
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }
  
  ngAfterViewInit(): void {
    console.log("ngAfterView");
    console.log(this.headerComponent.title = "Hello, This is header");

  }

  ngOnInit(): void {

    console.log("ngOnInit");

    console.log(this.headerComponent);
    
  }

  toggle(): void {
    // this.hideRooms = !this.hideRooms;
    this.hideRooms = (!this.hideRooms);
    this.headingForHidden=this.hideRooms?"shown": "hidden";
  }
  
  
  rooms: Room = {
    totalRooms:20,
    availableRooms:0,
    bookedRooms: 5
  }

  selectRoom(room:RoomList){
    this.selectedRooms = room;
  }

  newRoom:RoomList = {
    roomType: 'Fourth Class',
        amenities:'AC Room',
        price:10000,
        photos:'123',
        checkInTime: new Date(12/23/2023),
        checkOutTime: new Date(12/23/2024)
  }

  addRoom(){
    // this.roomsList.push(this.newRoom);  
    this.roomsList = [...this.roomsList , this.newRoom];
    this.cdr.detectChanges();
  }

  

}
