import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-c2',
  imports: [],
  templateUrl: './c2.html',
  styleUrls: ['./c2.css']
})
export class C2 {
  @Output() childMsg = new EventEmitter();
  @Output() newChildMsg = new EventEmitter();
  c2Data = {fName: 'Andy', lName: 'Pak'};
  sendMsg() { this.childMsg.emit(this.c2Data); }
  clearMsg() { this.newChildMsg.emit({fName: '', lName: ''}); }
}



