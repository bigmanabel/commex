import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../../../../shared/services/product.service';
import { CartService } from '../../../../shared/services/cart.service';
import { Product } from '../../../../shared/models/product.model';
import { ActivatedRoute } from '@angular/router';
import { Cart } from '../../../../shared/models/cart.model';
import { EventService } from '../../../../shared/services/event.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  id!: string;
  product!: Product;
  itemIsInCart: boolean = false;
  cartItem!: Cart;

  constructor(private productService: ProductService, private cartService: CartService, private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.onFetch();
    });
  }

  onFetch() {
    this.productService.fetchProductById(this.id).subscribe(product => {
      this.product = product;
    })

    this.cartService.fetchCart().subscribe(cart => {
      cart.forEach(cartItem => {
        if (cartItem.product.id === +this.id) {
          this.itemIsInCart = true;
          this.cartItem = cartItem;
        }
      })
    });
  }

  onAddToCart() {
    const cartItem = {
      product: this.product.id,
      quantity: 1
    }
    this.cartService.addToCart(cartItem).subscribe(() => {
      this.onFetch();
      this.eventService.onUpdateCartLength();
    });
  }

  onQuantityIncrease() {
    this.cartItem.quantity++;
    this.cartService.updateCart(this.cartItem).subscribe(() => {
      this.onFetch();
    });
  }

  onQuantityDecrease() {
    if (this.cartItem.quantity > 1) {
      this.cartItem.quantity--;
      this.cartService.updateCart(this.cartItem).subscribe(() => {
        this.onFetch();
      });
    } else if (this.cartItem.quantity === 1) {
      this.onDeleteFromCart();
    }
  }

  onDeleteFromCart() {
    this.cartService.deleteFromCart(this.cartItem).subscribe(() => {
      this.onFetch();
      this.eventService.onUpdateCartLength()
      this.itemIsInCart = false;
    });
  }

  arrayBufferToBase64(buffer: number[]): string {
    const binary = buffer.map(byte => String.fromCharCode(byte)).join('');
    return 'data:image/jpeg;base64,' + window.btoa(binary);
  }
}
