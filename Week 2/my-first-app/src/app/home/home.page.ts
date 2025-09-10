import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class HomePage {
  name: string = 'Student';
  greeting: string = '';
  test: string = '';

  constructor() {}

  showGreeting() {
    this.greeting = `Nice to meet you, ${this.name}!`;
  }
  showTest() {
    if(!this.test){
      this.test = `This is Test!`;
      return;
    }
    this.test = '';
  }
}