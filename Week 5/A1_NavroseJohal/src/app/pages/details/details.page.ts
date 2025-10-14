import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonItem, IonInput } from '@ionic/angular/standalone';
import { DecimalPipe } from '@angular/common';
import { DataService } from '../../data-service';
import { AirQualityComponent } from 'src/app/components/air-quality/air-quality.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [AirQualityComponent,FormsModule, IonContent, IonHeader,IonInput, IonToolbar, CommonModule, FormsModule,IonItem, IonTitle,IonButton, DecimalPipe, IonLabel]
})
export class DetailsPage implements OnInit {

  messageText: string = '';
  constructor(private router: Router, private messageService:DataService) { }

  selectedData: any;
  ngOnInit() {

    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state) {
      this.selectedData = nav.extras.state;
    }
    console.log('Received data:', this.selectedData);
  }

  gotoTab2(){
    this.messageService.sendMessage(
      `
  <p><strong>Details sent to the User:</strong></p>
  <pre>${JSON.stringify(this.selectedData, null, 2)}</pre>
  <p><strong>User's Comment about the data:</strong> ${this.messageText}</p>
  `
    );
    this.router.navigate(['/tabs/tab2']);
  }

}

// this page will display data from the following resource - https://data.ontario.ca/en/dataset/greenhouse-gas-emissions-reporting-by-facility/resource/0996bfd9-ed27-4f78-8ed1-9e024185f10a
// "User's comment about the following details sent to the details page <br> Details sent: " + JSON.stringify(this.selectedData)
  // +"<br> Comment: " + this.messageText
// the data was converted from CSV to JSON using the following tool - https://csvjson.com/csv2json
