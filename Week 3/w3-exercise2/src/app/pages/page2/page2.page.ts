import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C2Component } from '../../c2/c2.component';
import { C1Component } from '../../c1/c1.component';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    C2Component,
    C1Component,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    /* The `IonBackButton` component in Ionic framework is used to create a back button that navigates
    back in the navigation stack. When the user clicks on this button, it triggers a navigation
    action to go back to the previous page or view in the application. It is commonly used in the
    header of a page to provide a convenient way for users to navigate back in the app flow. */
    // IonBackButton
  ]
})
export class Page2Page {}