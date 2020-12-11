import { Component, OnInit,Input} from '@angular/core';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  
  
})
export class ProductListComponent implements OnInit {
  state='normal'
  @Input('product') product:{
    id:number,
    naziv:string,
    cena:number,
    productUrl:string,
    type:string
  }
  
  
  constructor() { }

  ngOnInit(): void {
    
  }

 

}
