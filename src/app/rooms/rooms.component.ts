import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../services/rooms.service';
import { IRoom, IRoomList } from './irooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  hotelName = "Ang Hotel";
  ptitle = 'List';
  nfRoom = 10;
  hideRoome = false;
  rooms: IRoom = {
    aroom: 4,
    broom: 6,
    troom: 10,
  };



  roomlist: IRoomList[] = [];
  selectedRoom!: IRoomList;

  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.roomlist = this.roomsService.getRooms();
  }

  onGetSelectedRoom(room: IRoomList) {
    console.log(room);
    this.selectedRoom = room;
  }

  addRoom() {
    const room: IRoomList =
    {
      roomNo: 4,
      roomType: 'Delux Room',
      amenities: 'AC Free Wi-Fi',
      price: 600,
      photo: 'https://unsplash.com/photos/whWhg0ozm54',
      checkinTime: new Date('10-Jan-2022'),
      checkoutTime: new Date('10-Jan-2022'),
      rating: 4.374
    };

    //this.roomlist.push(room);
    this.roomlist = [...this.roomlist, room];

  }

  toggle() {
    this.hideRoome = !this.hideRoome;
    this.ptitle = "Rooms List";
  }

}
