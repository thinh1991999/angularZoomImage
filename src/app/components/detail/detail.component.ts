import { Component } from '@angular/core';
import { product } from 'src/app/models/cart';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  product: product = {
    id: crypto.randomUUID(),
    imgs: [
      {
        small: '/assets/image-product-1.jpg',
        thumbnail: '/assets/image-product-1-thumbnail.jpg',
      },
      {
        small: '/assets/image-product-2.jpg',
        thumbnail: '/assets/image-product-2-thumbnail.jpg',
      },
      {
        small: '/assets/image-product-3.jpg',
        thumbnail: '/assets/image-product-3-thumbnail.jpg',
      },
      {
        small: '/assets/image-product-4.jpg',
        thumbnail: '/assets/image-product-4-thumbnail.jpg',
      },
    ],
    company: 'Sneaker Company',
    name: 'Fall Limited Edition Sneakers',
    about: `These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.`,
    price: 250,
    sale: 50,
  };
}
