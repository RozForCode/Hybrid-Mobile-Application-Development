// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {
//   protected readonly title = signal('w1-inclass1');
// }
import { Component } from '@angular/core'; 
import { HeaderComponent } from './header/header'; 
import { ContentComponent} from './content/content';
import { FormsModule } from '@angular/forms';
 
@Component({ 
  selector: 'app-root', 
  standalone: true, 
  imports: [HeaderComponent, ContentComponent, FormsModule], 
  templateUrl: './app.html', 
}) 
export class App {
  msgReceivedFromChild: string = "";

  getMsgFromChild($event: string){
    this.msgReceivedFromChild = $event;
  }

  string: string = "";
} 
  