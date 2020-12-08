import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

 products=[{
    id:1,
    naziv:'Night Table',
    cena:9000,
    productUrl:'../../assets/nighttable.jpg',
    type:'Bedroom'
  },
  {
    id:2,
    naziv:'Table',
    cena:4000,
    productUrl:'../../assets/radniSto.jpg',
    type:'Bedroom'
  },
  {
    id:3,
    naziv:'Sofa',
    cena:2000,
    productUrl:'../../assets/livingRoom.jpg',
    type:'Bedroom'
  },
  { 
    id:4,
    naziv:'Chair',
    cena:2000,
    productUrl:'../../assets/stolica_sto.jpg',
    type:'Living Room'
  },
  {
    id:5,
    naziv:'Kitchen',
    cena:30000,
    productUrl:'../../assets/kitchen.jpg',
    type:'Kitchen'
  },
  {
    id:6,
    naziv:'Bedroom',
    cena:2000,
    productUrl:'../../assets/bedRoom.jpg',
    type:'Bedroom'
  },
  {
    id:7,
    naziv:'Table',
    cena:40000,
    productUrl:'../../assets/living-room-table.jpg',
    type:'Living Room'
   },
   {
     id:8,
     naziv:'Sofa',
     cena:40000,
     productUrl:'../../assets/living-room-sofa.jpg',
     type:'Living Room'
   },
   {
    id:9,
    naziv:'Chair',
    cena:4000,
    productUrl:'../../assets/living-room-chair.jpg',
    type:'Bedroom'
   },
   {
     id:10,
     naziv:'Armchair',
     cena:7500,
     productUrl:'../../assets/living-room-armchair.jpg',
     type:'Living Room'
   },
   {
     id:11,
     naziv:'Cosy couch',
     cena:10000,
     productUrl:'../../assets/living-room-cosy-couch.jpg',
     type:'Bedroom'
   },
   {
    id:12,
    naziv:'Kitchen Bar Stool',
    cena:10000,
    productUrl:'../../assets/kitchen-bar-stool.jpg',
    type:'Kitchen'
  },
  {
    id:13,
    naziv:'Kitchen Dining Table',
    cena:20000,
    productUrl:'../../assets/kitchen-dining-table.jpg',
    type:'Kitchen'
  },
]



  constructor() { }

  getProduct(id:number) {
    const product = this.products.find((p)=>{
      return p.id===id}
    )
    
    return product
  }
  
}
