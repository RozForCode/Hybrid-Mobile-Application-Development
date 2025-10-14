import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C2Component } from '../../c2/c2.component';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';

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
export class Page1Page implements OnInit {
  constructor(private route: ActivatedRoute) { }

  title!: string;
  id!: string | null;
  ngOnInit() {
    // this.title = data['title'];
  this.route.data.subscribe(data => console.log(data['title'])); // 'Page 1'
  // or using snapshot
  this.title = this.route.snapshot.data['title'];
  this.route.paramMap.subscribe(params => {
  const id = params.get('id'); // 123
});
}

}