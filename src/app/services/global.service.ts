import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { cart } from '../models/cart';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  private readonly _cart = new BehaviorSubject<cart[]>([]);
  readonly _cart$ = this._cart.asObservable();
  constructor() {}

  get cart(): cart[] {
    return this._cart.getValue();
  }

  addCart(cart: cart) {
    const idx = this.cart.findIndex((c) => c.id === cart.id);
    if (idx < 0) {
      this.cart.unshift(cart);
    }
  }

  deleteCart(id: string) {
    const idx = this.cart.findIndex((c) => c.id === id);
    this.cart.splice(idx, 1);
  }
}
