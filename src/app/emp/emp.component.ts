import { Component, OnInit } from '@angular/core';
import {ListService} from "../list.service"

@Component({
  selector: 'app-emp',
  templateUrl:'./emp.component.html',
  styleUrls: ['./emp.component.css'],
  providers: [ListService]
})
export class EmpComponent implements OnInit {
  r1: string[]=[];
  r2: string[]=[];
  getInfoFromClass1(){
    this.r1=this.rs.getinfo1()
  }
  getInfoFromClass2(){
    this.r2=this.rs.getinfo2()
  }
  constructor(public rs: ListService) { }

  ngOnInit(): void {
  }

}
