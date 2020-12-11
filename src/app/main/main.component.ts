import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


import { ProductsService } from '../products.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers:[ProductsService]
})
export class MainComponent implements OnInit {
  
  products 
  fragment
  constructor(private productsService: ProductsService,private router:Router,public authService: AuthService) { }

  
  ngOnInit(): void {
    
    this.getProducts()
   
  }
  
  
  onLoadShop(){
    this.router.navigate(['/shop'])
  }
  getProducts(){
    this.productsService.getProducts()
    .subscribe(
      (products:any[])=>this.products=products,
      (error)=>console.log(error)
    )
  }
}
