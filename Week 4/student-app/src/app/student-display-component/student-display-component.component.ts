import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DataSharingService, Student } from '../data-sharing-service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-student-display',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './student-display-component.component.html',
  styleUrls: ['./student-display-component.component.scss'],
})
export class StudentDisplayComponent implements OnInit, OnDestroy {
  selectedStudent: Student | null = null;
  private destroy$ = new Subject<void>();

  constructor(private dataService: DataSharingService) {}

  ngOnInit() {
    this.dataService.selectedStudent$
      .pipe(takeUntil(this.destroy$))
      .subscribe(student => {
        this.selectedStudent = student;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  clearSelection() {
    this.dataService.clearStudent();
  }
}