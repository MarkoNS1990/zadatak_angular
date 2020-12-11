import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { CartService } from 'src/app/cart.service';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  
  productItem:{id:number,naziv:string,productUrl:string,cena:number,type:string}
  quantity
  message:string=null
  

  constructor(private productsService: ProductsService,private route: ActivatedRoute,public cartService:CartService,public authService: AuthService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id']
    
    this.productItem=this.productsService.getProduct(id)
    this.route.params.subscribe((params:Params)=>{
      this.productItem = this.productsService.getProduct(+params['id'])
    })
  }
 
   onAddToCart(){
    if(this.quantity>0){
      for (let i = 0; i < this.quantity; i++) {
        this.cartService.addToCart(this.productItem)
         } 
         +this.quantity===1?this.message=`A ${this.productItem.naziv} is added to basket`:this.message=`${this.quantity} ${this.productItem.naziv}s are added to basket`
         setTimeout(() => {
          this.message=null
        }, 3000);
        }
    
    
    
    
    
    console.log(this.cartService.cart)
   }

   getQuantity(e:Event){
     this.quantity=(<HTMLInputElement>e.target).value
     
   }
}
