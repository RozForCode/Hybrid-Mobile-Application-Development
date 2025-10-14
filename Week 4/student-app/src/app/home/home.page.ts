import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from '../student-list/student-list.component';
import { StudentDisplayComponent } from '../student-display-component/student-display-component.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone: true,
  imports: [IonicModule, CommonModule, StudentListComponent, StudentDisplayComponent],
})
export class HomePage {
  constructor() {}
}