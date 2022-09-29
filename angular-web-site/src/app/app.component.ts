import { Component } from '@angular/core';
import lollo_cv from './_files/lollo_cv.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-web-site';
  cv:any=lollo_cv;
  stri:String=JSON.stringify(this.cv);
}
