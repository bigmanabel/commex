import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private updateCartLength = new Subject<void>();

  updateCartLength$ = this.updateCartLength.asObservable();

  constructor() { }

  onUpdateCartLength() {
    this.updateCartLength.next();
  }
}
