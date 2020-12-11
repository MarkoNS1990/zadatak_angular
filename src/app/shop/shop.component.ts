import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  
  
  
})
export class ShopComponent implements OnInit {
  
  products=this.productsService.products
  filteredProducts=[]
  category=''
  categories = [
    {name:'Bedroom'},
    {name:'Kitchen'},
    {name:'Living Room'},
    {name:'Bathroom'},
]



  constructor(private productsService: ProductsService,private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(params=>{
      this.category=params.get('category')
      this.filteredProducts=(this.category)?
      this.products.filter(p=> p.type===this.category):this.products

    })
    
   }
   

  ngOnInit(): void {
   
    
  }

}
