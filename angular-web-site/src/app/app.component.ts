import { Component } from '@angular/core';
import lollo_cv from './_files/lollo_cv.json';
import { SharedService } from 'src/app/utils/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countClick:number=0;

  //nel costruttore di tutti i componenti che vogliono usare questo servizio gli passo appunto il servizio
  constructor(private SharedService:SharedService){

    //facendo getClickEvent.subscribe richiedo il click e il parametro che mi viene passato, in questo caso value ma che non uso
    //perché gestisco solo un contatore
    this.SharedService.getClickEvent().subscribe((value)=>{
      this.countClick++;
    })
  }
  title = 'angular-web-site';
  cv:any = lollo_cv;
  stri: String = JSON.stringify(this.cv);

}
