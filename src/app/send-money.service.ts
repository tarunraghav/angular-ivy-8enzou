import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendMoneyService {

  sendMoney = new Subject<any>()
  constructor() { }
}
