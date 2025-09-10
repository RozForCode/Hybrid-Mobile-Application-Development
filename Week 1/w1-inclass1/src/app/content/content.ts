import { Component } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { UpperCasePipe } from '@angular/common';     // <-- import CommonModule 
import { Student } from '../student';      
import { FormsModule } from '@angular/forms';         // <-- import Student class/interface 
 
import { Input } from '@angular/core';
@Component({ 
  selector: 'app-content', 
  standalone: true, 
  imports: [CommonModule, UpperCasePipe, FormsModule],                         // <-- include CommonModule 
  templateUrl: './content.html', 
  styleUrls: ['./content.css'] 
}) 
export class ContentComponent { 
  @Input() inputMsgComingFromParent: string = '';
  capitalizedText: string = 'Typed here will be capitalized';
  city:String = 'Brampton';
  mouse() {
    this.city = 'Mississauga';
  }
  mouse2() {
    this.city = 'Oakville';
  }
  currStudent: Student = { 
    sname: 'Navrose Johal', 
    sid: 991745899, 
    scampus: 'Burnaby',
    sEmail: 'johnavro@sheridancollege.ca' 
  }; 
} 