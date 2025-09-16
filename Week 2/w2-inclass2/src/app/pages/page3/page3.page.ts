import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';

import { Getdata } from '../../getdata';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButton]
})
export class Page3 implements OnInit {

constructor(private ldData: Getdata) { }
addItem() {
this.ldData.setData('a1','This is a1');
console.log(`Added: ${this.ldData.getData('a1')}`);
}
retrieveItem() {
console.log(`Retrieved: ${this.ldData.getData('a1')}`);
}
deleteItem() {
this.ldData.removeData('a1')
console.log(`Deleted: ${this.ldData.getData('a1')}`);
}

  ngOnInit() {
  }
}
