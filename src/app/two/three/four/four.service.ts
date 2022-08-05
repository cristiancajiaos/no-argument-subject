import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FourService {

  sendSomething: Subject<boolean> = new Subject();
  sendSomethingObs: Observable<boolean> = this.sendSomething.asObservable();

  constructor() { }

  public foo(): void {
    this.sendSomething.next(true);
  }
}
