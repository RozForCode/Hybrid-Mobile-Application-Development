import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class Tab1Page {
  name: string = 'Student';
  greeting: string = '';

  constructor() {}

  showGreeting() {
    this.greeting = `Nice to meet you, ${this.name}!`;
  }
}