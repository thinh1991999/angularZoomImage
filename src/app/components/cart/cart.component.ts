import { Component } from '@angular/core';
import { cart } from 'src/app/models/cart';
import { GlobalService } from 'src/app/services/global.service';
import { UltilsService } from 'src/app/services/ultils.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cart: cart[] = [];
  showCartMobile: boolean = false;
  constructor(
    public globalService: GlobalService,
    public ultils: UltilsService
  ) {
    globalService._cart$.subscribe((cart) => {
      this.cart = cart;
    });
  }

  formatnb(nb: number) {
    return this.ultils.formatnb(nb);
  }
  handleDelete(id: string) {
    this.globalService.deleteCart(id);
  }

  handleShowMobile() {
    this.showCartMobile = !this.showCartMobile;
  }
}
