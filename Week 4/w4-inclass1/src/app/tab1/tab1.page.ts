import {
  IonAlert,
  IonPicker,
  IonPickerColumn,
  IonPickerColumnOption,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonInput,
  IonItem,
  IonList,
  IonCheckbox,
  IonRadio,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonSearchbar,
  IonImg,
} from '@ionic/angular/standalone';
import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: true,
  imports: [
    IonAlert,
    IonPickerColumn,
    IonPickerColumnOption,
    IonPicker,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonInput,
    IonItem,
    IonList,
    IonCheckbox,
    IonRadio,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonSearchbar,
    IonImg,
  ],
})
export class Tab1Page {
  alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      },
    },
    {
      text: 'Ok',
      role: 'confirm',
      handler: () => {
        console.log('Ok clicked');
      },
    },
  ];
  constructor(private actionSheetController: ActionSheetController) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Menu',
      buttons: [
        {
          text: 'Delete',
          icon: 'trash',
          role: 'destructive',
          handler: () => {
            console.log('Delete');
          },
        },
        {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('Share');
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel');
          },
        },
      ],
    });
    await actionSheet.present();
  }
}