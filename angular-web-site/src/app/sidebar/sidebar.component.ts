import { Component, OnInit } from '@angular/core';
import { SharedService } from '../utils/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  status:string = "close";


  constructor(private SharedService:SharedService) {

    this.SharedService.getClickEventSidebar().subscribe((value)=>{
      console.log("il click arriva da:" +value.name);
      this.openCloseEvent();
    })

  }

  ngOnInit(): void {
  }


  //semplicemente cambio la variabile dell'ngclass quindi assegno la classe open di cui ho definito il css
  openCloseEvent():void{
    if(this.status=="close"){
      this.status="open";
      console.log(this.status);
    } else if(this.status=="open"){
      this.status="close";
      console.log(this.status);
    }
  }

  //se volessi passare parametri potrei fare come mostrato, creo un dizionario "{}" e gli passo tutti i parametri che voglio
  //in questo caso passo .name quindi potrei prendermi dall'altra parte il nome del componente cliccato
  onClick():void{
    let toSend:any={};
    toSend.name="sidebar"
    this.SharedService.sendClickEventSidebar(toSend);
  }



}
