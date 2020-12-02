import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  
  products=this.productsService.products
  
  getBedroom(){
    
    return this.products.filter(product=>product.type==='bedroom')
    
  }

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    
  }

}
