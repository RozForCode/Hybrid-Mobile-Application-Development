import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { C1Component } from '../../c1/c1.component'; // Import your component

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  standalone: true,
  imports: [CommonModule, IonicModule, C1Component] // Add to imports
})
export class Page2Page {}