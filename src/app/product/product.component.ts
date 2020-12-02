import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input('product') product:{
  naziv:string,
  cena:number,
  productUrl:string
  }

  constructor() { }

  ngOnInit(): void {
  }

 

}
