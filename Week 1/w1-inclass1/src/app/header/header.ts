import { Component } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { Student } from '../student';  // <-- import Student 
import { Output, EventEmitter } from '@angular/core';
@Component({ 
  selector: 'app-header', 
  imports: [FormsModule],
  standalone: true, 
  templateUrl: './header.html', 
  styleUrls: ['./header.css'] 
}) 
export class HeaderComponent { 
  @Output() msgToSendToParent = new EventEmitter();
  msgForParent = "Hi this is coming from Header Component(child) to App Component(Parent)";

  msgThere: boolean = false;
  sendMsgToParent(){
    if (this.msgThere) {
      this.msgToSendToParent.emit(""); 
      this.msgThere = false;
      return;
    }
    this.msgToSendToParent.emit(this.msgForParent); 
    this.msgThere = true;
  }
  name = 'Type something here!'; 
  currStudent: Student = { 
    sname: 'Navrose Johal', 
    sid: 991745899, 
    scampus: 'Burnaby',
    sEmail: 'johnavro@sheridanca' 
  }; 
} 