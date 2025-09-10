import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class HomePage { 
 number1: number = 0; 
 number2: number = 0; 
 result: number = 0; 
 result1: any[] = [];
 calculate1() { 
   return this.result = Number(this.number1) + Number(this.number2);
 } 
 calculate2() { 
   return this.result = Number(this.number1) - Number(this.number2);
 } 
 calculate3() { 
   return this.result = Number(this.number1) * Number(this.number2);
 } 
 calculate4() { 
  if(this.number2 === 0){
    this.result = "Division by zero not possible" as any;
    return;
  }
    return this.result = Number(this.number1) / Number(this.number2);
 } 
 calculate5() { 
  if(this.result1.length > 0){
    this.result1 = [];
    return;
  }
   this.result1.push(Number(this.number1) + Number(this.number2),Number(this.number1) - Number(this.number2),Number(this.number1) * Number(this.number2),(Number(this.number2) === 0) 
    ? "Division by zero not possible" 
    : Number(this.number1) / Number(this.number2));
   this.result1.toString();
 }
 clear() { 
   this.number1 = 0; 
   this.number2 = 0; 
   this.result = 0; 
   this.result1 = [];
 }
} 
