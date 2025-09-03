import { Component } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { UpperCasePipe } from '@angular/common';     // <-- import CommonModule 
import { Student } from '../student';               // <-- import Student class/interface 
 
@Component({ 
  selector: 'app-content', 
  standalone: true, 
  imports: [CommonModule, UpperCasePipe],                         // <-- include CommonModule 
  templateUrl: './content.html', 
  styleUrls: ['./content.css'] 
}) 
export class ContentComponent { 
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