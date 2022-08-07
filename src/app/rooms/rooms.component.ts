import { Component, OnInit } from '@angular/core';
import { IRoom, IRoomList } from './irooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  hotelName = "Ang Hotel";
  nfRoom = 10;
  hideRoome = false;
  rooms: IRoom = {
    aroom: 4,
    broom: 6,
    troom: 10,
  };



  roomlist: IRoomList[] = [];
  selectedRoom!: IRoomList;
  constructor() { }

  ngOnInit(): void {
    this.roomlist = [
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

  onGetSelectedRoom(room: IRoomList) {
    console.log(room);
    this.selectedRoom = room;
  }


  toggle() {
    this.hideRoome = !this.hideRoome;
  }

}
