import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C1Component } from '../c1/c1.component';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    C1Component
  ]
})
export class Tab3Page {}