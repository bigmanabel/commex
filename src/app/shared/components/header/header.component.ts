import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  eventSubscription!: Subscription;
  cartLength!: number;

  constructor(private cartService: CartService, private eventService: EventService) {
    this.eventSubscription = this.eventService.updateCartLength$.subscribe(() => {
      this.updateCartLength();
    })
  }

  ngOnInit(): void {
    this.onFetch()
  }

  onFetch() {
    this.cartService.fetchCart().subscribe(cart => {
      this.cartLength = cart.length;
    })
  }

  updateCartLength() {
    this.onFetch();
  }

  ngOnDestroy() {
    this.eventSubscription.unsubscribe();
  }
}
