import { Component } from '@angular/core';
import {Input} from '@angular/core';
@Component({
  selector: 'app-c1',
  imports: [],
  templateUrl: './c1.html',
  styleUrl: './c1.css'
})
export class C1 {
  @Input() c1Data: any;
}
