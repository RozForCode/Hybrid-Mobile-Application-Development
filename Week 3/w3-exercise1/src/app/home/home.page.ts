import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone: true,
  imports: [IonicModule, RouterModule]
})
export class HomePage {
  
  constructor(private router: Router) {}

  goPage1() {
    this.router.navigate(['/page1'])
      .then(nav => console.log('Navigation success:', nav))
      .catch(err => console.log('Navigation error:', err));
  }
  goPage2() {
    this.router.navigate(['/page2'])
      .then(nav => console.log('Navigation success:', nav))
      .catch(err => console.log('Navigation error:', err));
  }
}