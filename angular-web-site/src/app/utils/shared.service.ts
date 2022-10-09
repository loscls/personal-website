import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

//tutti i componenti possono importare nel costruttore questo servizio
export class SharedService {
  private subject=new Subject<any>();

  //i componenti che lo importano possono richiamare queste due funzioni:

  //questa triggera il click e puoi passare parametri
  sendClickEvent(params:any){

    this.subject.next(params);
  }

  //questa può leggere i parametri passati come si può vedere nell classe app.component.ts
  getClickEvent():Observable<any>{
    return this.subject.asObservable();
  }
}
