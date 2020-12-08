import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = []

  constructor() { }
  addToCart(product){
    this.cart.push(product)
  }
}
