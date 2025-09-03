import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {C1} from './components/c1/c1';
import {C2} from './components/c2/c2';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, C1, C2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  homeData = {class: 'SYST35300', desc: 'Hybrid Mobile Dev'};
  protected readonly title = signal('w1-inclass2');
  myMsg = {fName: '', lName: ''};
  getMsg($event: any) {
  this.myMsg = $event;
  }
  clearMsg($event: any) {
    this.myMsg = $event;
  }
}
