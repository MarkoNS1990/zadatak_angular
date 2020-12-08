import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers:[ProductsService]
})
export class MainComponent implements OnInit {
  
  products = this.productsService.products
  constructor(private productsService: ProductsService,private router:Router) { }

  
  ngOnInit(): void {
    
   
  }

  
  onLoadShop(){
    this.router.navigate(['/shop'])
  }
  
}
