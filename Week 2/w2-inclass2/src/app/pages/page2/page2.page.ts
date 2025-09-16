import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { C1Component } from 'src/app/c1/c1.component';
import { C2Component } from 'src/app/c2/c2.component';
import { Pdata } from 'src/app/pdata';
import { Getdata } from 'src/app/getdata';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, C1Component, C2Component],
})
export class Page2Page implements OnInit {

  myData!: Pdata;
  constructor(private ldData: Getdata) { }
  loadmyData(): void{
      this.myData = this.ldData.loadData();
  }

  ngOnInit() {
    this.loadmyData();
  }

}
