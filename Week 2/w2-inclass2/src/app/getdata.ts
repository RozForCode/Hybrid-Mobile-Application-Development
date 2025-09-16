import { Injectable } from '@angular/core';
import { Pdata } from './pdata';
import { PDATA } from '../assets/pData';

@Injectable({
  providedIn: 'root'
})
export class Getdata {

  loadData(): Pdata {
    return PDATA;
  }
  setData(key:string, value:any) {
    localStorage.setItem(key, value);
  }
  data: any;
  getData(key:string) {
    this.data = localStorage.getItem(key);
    return this.data;
  }

  removeData(key:string) {
    localStorage.removeItem(key);
  }
  
  
  
}
