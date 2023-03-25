import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class RoomsListComponent implements OnInit, OnChanges{
  // ngDoCheck(): void {
  //   console.log('Working');
  // }
  //OnChanges method
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['headingForHidden']){
      this.headingForHidden = changes['headingForHidden'].currentValue.toUpperCase();
    }
  }

  //On Init method
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  //Input() property
  @Input() rooms: RoomList[] = [];

  @Input() headingForHidden: String = '';

  //Output Property
  @Output() selectedRooms= new EventEmitter<RoomList>();
  
  //Onclick Event Method
  selectRoom(room: RoomList){
    this.selectedRooms.emit(room);
  }

}
