import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  info1: string[] = ['Anu','234']
  info2: string[] = ['Sai','567']
  getinfo1(): string[] {
    return this.info1
  }
  getinfo2(): string[] {
    return this.info2
  }
  constructor() { }
}
