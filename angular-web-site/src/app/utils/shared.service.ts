import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

//tutti i componenti possono importare nel costruttore questo servizio
export class SharedService {
  private subject=new Subject<any>();

  //i componenti che lo importano possono richiamare queste due funzioni:
  //send & click event

  //GENERAL
  sendClickEvent(params:any){
    this.subject.next(params);
  }
  getClickEvent():Observable<any>{
    return this.subject.asObservable();
  }

  //TOOLBAR
  //questa triggera il click e puoi passare parametri
  sendClickEventToolbar(params:any){
    this.subject.next(params);
  }
  //questa può leggere i parametri passati come si può vedere nell classe app.component.ts
  getClickEventToolbar():Observable<any>{
    return this.subject.asObservable();
  }

  //SIDEBAR
  sendClickEventSidebar(params:any){
    this.subject.next(params);
  }
  getClickEventSidebar():Observable<any>{
    return this.subject.asObservable();
  }
}


