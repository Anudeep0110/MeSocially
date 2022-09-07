import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  e1 : string[]=['Anudeep','CSM','013']
  e2 : string[]=['Saisree','CSM','018']
  e3 : string[]=['Yaswanth','CSM','019']

  getinfo1() :string[]{
    return this.e1
  }
  getinfo2() :string[]{
    return this.e2
  }
  getinfo3() :string[]{
    return this.e3
  }
  setInfo(frm:any){
    this.e1.push(frm);
    this.e2.push(frm);
    this.e3.push(frm);
    return this.e1;
  }

  constructor() { }
}
