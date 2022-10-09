import { Component, OnInit } from '@angular/core';
import { SharedService } from '../utils/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  status:string = "close";

  constructor(private SharedService:SharedService) { }

  ngOnInit(): void {
  }

  //semplicemente cambio la variabile dell'ngclass quindi assegno la classe open di cui ho definito il css
  openCloseEvent():void{
    this.sendClick();
    if(this.status=="close"){
      this.status="open";
      console.log(this.status);
    } else if(this.status=="open"){
      this.status="close";
      console.log(this.status);
    }
  }
  sendClick():void{
    let toSend:any={};
    toSend.name="sidebar"
    this.SharedService.sendClickEvent(toSend);
  }

}
