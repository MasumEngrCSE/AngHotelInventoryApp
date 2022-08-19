import { Injectable } from '@angular/core';
import { IRoomList } from '../rooms/irooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor() { }


  getRooms() {
    return this.roomlist;
  }




  // Sample Data:


 private roomlist: IRoomList[] = [
    {
      roomNo: 1,
      roomType: 'Delux Room',
      amenities: 'AC Free Wi-Fi',
      price: 500,
      photo: 'https://unsplash.com/photos/whWhg0ozm54',
      checkinTime: new Date('10-Jan-2022'),
      checkoutTime: new Date('10-Jan-2022'),
      rating: 4.374
    },
    {
      roomNo: 2,
      roomType: 'Delux Room',
      amenities: 'AC Free Wi-Fi',
      price: 700,
      photo: 'https://unsplash.com/photos/RXdzJXRNXo0',
      checkinTime: new Date('10-Jan-2022'),
      checkoutTime: new Date('10-Jan-2022'),
      rating: 4.587
    }
    ,
    {
      roomNo: 3,
      roomType: 'Private Suit Room',
      amenities: 'AC Free Wi-Fi',
      price: 1500,
      photo: 'https://unsplash.com/photos/LwptdqXZqkg',
      checkinTime: new Date('10-Jan-2022'),
      checkoutTime: new Date('10-Jan-2022'),
      rating: 3.232
    }
  ];





}
