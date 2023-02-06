import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../utils/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() datiCv: any;
  title = 'angular-web-site';

  constructor(private SharedService:SharedService) { }

  ngOnInit(): void {
  }

  onClick() {
    let toSend:any={};
    toSend.name = "toolbar";
    this.SharedService.sendClickEventToolbar(toSend);
  }
}
