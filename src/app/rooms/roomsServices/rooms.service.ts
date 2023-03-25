import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import {environment} from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

   roomsList:RoomList[] = [
    {
      roomType: 'Deluxe',
      amenities:'AC Room',
      price:10000,
      photos:'123',
      checkInTime: new Date(12/23/2023),
      checkOutTime: new Date(12/23/2024)
    },
    {
      roomType: 'Super Deluxe',
      amenities:'AC Room',
      price:10000,
      photos:'123',
      checkInTime: new Date(12/23/2023),
      checkOutTime: new Date(12/23/2024)
    },
    {
      roomType: 'Second Class',
      amenities:'AC Room',
      price:10000,
      photos:'123',
      checkInTime: new Date(12/23/2023),
      checkOutTime: new Date(12/23/2024)
    }
  ];

  constructor() { 
    console.log(environment.apiUrl)
  }

  getRooms(){
    return this.roomsList;
  }
}
