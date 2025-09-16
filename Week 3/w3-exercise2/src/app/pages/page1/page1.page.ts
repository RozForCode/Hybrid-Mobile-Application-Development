import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C2Component } from '../../c2/c2.component';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    C2Component,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  ]
})
export class Page1Page {}