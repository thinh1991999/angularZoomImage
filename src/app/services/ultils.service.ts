import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UltilsService {
  constructor() {}
  formatnb(nb: number) {
    return nb.toFixed(2);
  }
}
