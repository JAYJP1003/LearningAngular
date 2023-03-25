import { Component } from '@angular/core';
import { RoomsService } from '../rooms/roomsServices/rooms.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: String = '';

  constructor(private roomsService: RoomsService){
    console.log('fiwjijirjevirievjorejrjgorjgo');
    console.log(roomsService);
    roomsService.roomsList[0].roomType = "Lele mera";
  }
}
