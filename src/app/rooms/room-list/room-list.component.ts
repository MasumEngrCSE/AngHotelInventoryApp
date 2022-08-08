import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IRoomList } from '../irooms';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomListComponent implements OnInit,OnChanges {

@Input() rooms:IRoomList[]=[];
@Input() ptitle:string='';

@Output() selectedRoom=new EventEmitter<IRoomList>();

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void 
  {
    console.log(changes);
    
if(changes['ptitle']){
  this.ptitle=changes['ptitle'].currentValue.toUpperCase();
}

   // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

  onSelectedRoom(room:IRoomList){

    this.selectedRoom.emit(room);
  }

}
