import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Footer from "../models/Footer";

@Injectable({
  providedIn: 'root'
})
export class TaktService {

  constructor() { }

  getTakt(): Observable<any> {
    return new Observable(obs => {
      setInterval(() => {
        let time = new Date().toTimeString().slice(0, 8);
        obs.next(time);
      }, 1000);
    });
  }


}
