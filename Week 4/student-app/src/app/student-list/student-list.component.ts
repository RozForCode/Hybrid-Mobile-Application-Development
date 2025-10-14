import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DataSharingService, Student } from '../data-sharing-service';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent {
  students: Student[] = [
    { id: 1, name: 'Alice', age: 16 },
    { id: 2, name: 'Bob', age: 17 },
    { id: 3, name: 'Carol', age: 15 }
  ];

  constructor(private dataService: DataSharingService) {}

  onStudentClick(student: Student) {
    this.dataService.selectStudent(student);
  }
}