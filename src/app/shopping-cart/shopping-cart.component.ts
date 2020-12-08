import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart
  
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.cart
    this.getTotalPrice()
  }
  
  getTotalPrice(){
    if(this.cart.length>0){
      
    const prices = this.cart.map(item=>item.cena)
    
    const total =prices.reduce((a,b)=>a+b)
    
    return `${total} RSD` 
  }
  
 }
  
 onRemove(index){
    this.cart.splice(index,1)
 }
}
