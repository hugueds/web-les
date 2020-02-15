import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket } from 'ngx-socket-io';
import Footer from "../models/Footer";

@Injectable({
  providedIn: 'root'
})
export class TaktService {

  constructor(private _socket: Socket) {

  }

  getTakt(): Observable<any> {
    return new Observable(obs => {
      setInterval(() => {
        let time = new Date().toTimeString().slice(0, 8);
        obs.next(time);
      }, 1000);
    });
  }

  getTaktSocket(): Observable<any> {
    return Observable.create(o => {
      this._socket.on('takt', (takt) => {
        o.next(takt);
      });
    });
  }


}
