import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsService } from './rooms/roomsServices/rooms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit, AfterViewInit{

  constructor(private roomsService: RoomsService){
  
  }
  ngOnInit(): void {
    console.log('in app.component oninit');
    console.log(this.bye);
  }
  ngAfterViewInit(): void {
    let componentRef = this.vcr.createComponent(RoomsComponent);
    console.log(componentRef);
   
    
  }
  title = 'hotelInventoryApp';

  role = "Admin";

   aisehi() {
    alert('hello');
  }
  @ViewChild('bye', {static:true}) bye !: ElementRef;
  @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;


}



