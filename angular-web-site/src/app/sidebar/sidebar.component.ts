import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  status:string="close";
  constructor() { }

  ngOnInit(): void {
  }

  //semplicemente cambio la variabile dell'ngclass quindi assegno la classe open di cui ho definito il css
  openCloseEvent():void{
    if(this.status=="close"){
      this.status="open";
    }
  }

}
