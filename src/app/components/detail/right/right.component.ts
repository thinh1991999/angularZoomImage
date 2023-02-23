import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { product } from 'src/app/models/cart';
import { GlobalService } from 'src/app/services/global.service';
import { UltilsService } from 'src/app/services/ultils.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss'],
})
export class RightComponent {
  @Input() product?: product;
  count: number = 1;
  test = new FormControl('');
  realPrice: number = 0;
  constructor(
    public globalService: GlobalService,
    public ultis: UltilsService
  ) {}
  ngOnInit() {
    if (this.product) {
      this.realPrice = this.product.price * (this.product.sale / 100);
    }
  }
  get countVL(): Number {
    return this.count;
  }

  handleChange(e: any) {
    const vl = e.target.value * 1;
    if (vl < 1 || Number.isNaN(vl)) {
      e.target.value = 1;
    }
  }

  formatNb(nb: number) {
    return this.ultis.formatnb(nb);
  }

  addToCart() {
    if (!this.product) return;
    this.globalService.addCart({
      ...this.product,
      count: this.count,
      realPrice: this.realPrice,
    });
  }

  minus() {
    if (this.count > 1) {
      this.count--;
    }
  }

  add() {
    this.count++;
  }

  _keyUp(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.key);

    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
