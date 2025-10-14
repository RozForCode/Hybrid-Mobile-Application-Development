import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Student {
  id: number;
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  // private storage
  private selectedStudentSubject = new BehaviorSubject<Student | null>(null);

  // observable for components
  public selectedStudent$ = this.selectedStudentSubject.asObservable();

  constructor() {
    console.log('📡 DataSharingService created');
  }

  selectStudent(student: Student) {
    console.log('📤 Sharing student:', student.name);
    this.selectedStudentSubject.next(student);
  }

  clearStudent() {
    console.log('🧹 Clearing student selection');
    this.selectedStudentSubject.next(null);
  }
}