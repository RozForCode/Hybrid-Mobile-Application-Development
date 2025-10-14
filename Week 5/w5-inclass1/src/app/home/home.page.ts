import { Component } from '@angular/core';
import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { ActionSheet, ActionSheetButtonStyle } from '@capacitor/action-sheet';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Device } from '@capacitor/device';
import { Dialog } from '@capacitor/dialog';
import { Network } from '@capacitor/network';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone: true,
  imports: [
    IonContent,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardSubtitle,
    IonHeader,
    IonTitle,
    IonToolbar,
  ],
})
export class HomePage {
  deviceInfo: any[] = [];
  imageUrl: string = '';

  async showActionSheet() {
    const options = [
      { title: 'Upload' },
      { title: 'Share' },
      { title: 'Remove', style: ActionSheetButtonStyle.Destructive },
    ];
    const result = await ActionSheet.showActions({
      title: 'Photo Options',
      message: 'Select an option to perform',
      options,
    });
    console.log('Action chosen:', result);
  }

  async takePhoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });
    this.imageUrl = image.webPath || '';
    console.log('Photo taken:', this.imageUrl);
  }

  async getDeviceInfo() {
    try {
      const info = await Device.getInfo();
      this.deviceInfo = Object.entries(info);
    } catch (err) {
      console.error('Error fetching device info', err);
    }
  }

  async showDialog() {
    await Dialog.alert({ title: 'Stop', message: 'This is an error' });
    const { value: confirmed } = await Dialog.confirm({
      title: 'Confirm',
      message: 'Are you sure?',
    });
    const { value: name, cancelled } = await Dialog.prompt({
      title: 'Hello',
      message: `What's your name?`,
    });
    console.log('Dialog confirmed:', confirmed);
    console.log('Name:', name, 'Cancelled:', cancelled);
  }

  async getNetworkStatus() {
    const status = await Network.getStatus();
    console.log('Network status:', status);
  }

  async hideStatusBar() {
    await StatusBar.hide();
  }

  async showStatusBar() {
    await StatusBar.setBackgroundColor({ color: '#ffff00' });
    await StatusBar.setStyle({ style: Style.Light });
    await StatusBar.show();
  }

  async showToast() {
    await Toast.show({ text: 'Hello!' });
  }
}