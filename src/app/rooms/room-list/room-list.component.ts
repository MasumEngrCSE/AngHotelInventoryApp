import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IRoomList } from '../irooms';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

@Input() rooms:IRoomList[]=[];
@Output() selectedRoom=new EventEmitter<IRoomList>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedRoom(room:IRoomList){

    this.selectedRoom.emit(room);
  }

}
