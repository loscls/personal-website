import { animate, style, transition, trigger } from '@angular/animations';
import { Component,Input, OnInit } from '@angular/core';
import { SharedService } from '../utils/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({opacity: 0}),
        animate('600ms',
          style({opacity: 1})
        )
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('100ms',
          style({opacity: 0})
        )
      ])
    ])
  ]
})

export class SidebarComponent implements OnInit {
  @Input() datiCv: any;

  status:string = "close";
  blur:string = "off"


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
      this.blur="on";
      console.log(this.status);
    } else if(this.status=="open"){
      this.status="close";
      this.blur="off"
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
