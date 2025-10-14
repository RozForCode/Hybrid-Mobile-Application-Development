import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { C2Component } from '../c2/c2.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, C2Component, IonButton],
})
export class Tab1Page {
  constructor(private router: Router) {}
   goToDetails() {
      this.router.navigate(['/page3', 123]);
   }

}
