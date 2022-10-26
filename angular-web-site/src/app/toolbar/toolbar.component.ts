import { Component, OnInit } from '@angular/core';
import { SharedService } from '../utils/shared.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private SharedService:SharedService) { }

  ngOnInit(): void {
  }

  onClick() {
    let toSend:any={};
    toSend.name = "toolbar";
    this.SharedService.sendClickEventToolbar(toSend);
  }

}
