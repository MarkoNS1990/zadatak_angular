import { Component, OnInit } from '@angular/core';
import {ProductComponent} from '../product/product.component';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers:[ProductsService]
})
export class MainComponent implements OnInit {
  
  products = this.productsService.products
  constructor(private productsService: ProductsService) { }

  
  ngOnInit(): void {
    
   
  }

  
  
  
}
