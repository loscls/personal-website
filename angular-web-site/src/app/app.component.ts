import { Component } from '@angular/core';
import lollo_cv from './_files/lollo_cv.json';
import { SharedService } from 'src/app/utils/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cosaClicco:String="non hai cliccato niente";
  count:Number=0;
  constructor(private SharedService:SharedService){
    this.SharedService.getClickEvent().subscribe((value)=>{
      this.cosaClicco="hai cliccato "+value.name;
    })
  }
  title = 'angular-web-site';
  cv:any = lollo_cv;
  stri: String = JSON.stringify(this.cv);

}
