import { Component, Input, OnInit } from '@angular/core';
import lollo_cv from '../_files/lollo_cv.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //@Input() datiCv: any; togliere ciò perché non li stiamo passando da padre ma leggendo da json
  mostra:boolean=true;
  title = 'angular-web-site';
  datiCv:any = lollo_cv;
  stri: String = JSON.stringify(this.datiCv);
  constructor() { }

  ngOnInit(): void {
  }

}
