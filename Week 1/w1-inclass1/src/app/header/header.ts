import { Component } from '@angular/core'; 
import { Student } from '../student';  // <-- import Student 
@Component({ 
  selector: 'app-header', 
  standalone: true, 
  templateUrl: './header.html', 
  styleUrls: ['./header.css'] 
}) 
export class HeaderComponent { 
  // sname = 'Navrose Johal'; 
  currStudent: Student = { 
    sname: 'Navrose Johal', 
    sid: 991745899, 
    scampus: 'Burnaby',
    sEmail: 'johnavro@sheridanca' 
  }; 
} 