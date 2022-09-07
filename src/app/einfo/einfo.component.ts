import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service"

@Component({
  selector: 'app-einfo',
  templateUrl: './einfo.component.html',
  styleUrls: ['./einfo.component.css'],
  providers : [DataService]
})
export class EinfoComponent implements OnInit {

  r1 : string[] = [];
  r2 : string[] = [];
  r3 : string[] = [];

  getInfoFromClass01(){
    this.r1=this.res.getinfo1();
  }
  getInfoFromClass02(){
    this.r2=this.res.getinfo2();
  }
  getInfoFromClass03(){
    this.r3=this.res.getinfo3();
  }

  updateData(frm :any){
    this.res.setInfo(frm.value.Location)
  }

  constructor(private res: DataService) { }

  ngOnInit(): void {
  }

}
