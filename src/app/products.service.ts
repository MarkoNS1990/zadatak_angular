import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

 products=[{
    naziv:'Night Table',
    cena:9000,
    productUrl:'../../assets/nighttable.jpg',
    type:'bedroom'
  },
  {
    naziv:'Table',
    cena:4000,
    productUrl:'../../assets/radniSto.jpg',
    type:'bedroom'
  },
  {
    naziv:'Sofa',
    cena:2000,
    productUrl:'../../assets/livingRoom.jpg',
    type:'bedroom'
  },
  {
    naziv:'Chair',
    cena:2000,
    productUrl:'../../assets/stolica_sto.jpg',
    type:'living room'
  },
  {
    naziv:'Kitchen',
    cena:30000,
    productUrl:'../../assets/kitchen.jpg',
    type:'kitchen'
  },
  {
    naziv:'Bedroom',
    cena:2000,
    productUrl:'../../assets/bedRoom.jpg',
    type:'bedroom'
  },
  {
    naziv:'Table',
    cena:40000,
    productUrl:'../../assets/living-room-table.jpg',
    type:'bedroom'
   },
   {
     naziv:'Sofa',
     cena:40000,
     productUrl:'../../assets/living-room-table.jpg',
     type:'bedroom'
   },
   {
    naziv:'Chair',
    cena:40000,
    productUrl:'../../assets/living-room-table.jpg',
    type:'bedroom'
   },
   {
     naziv:'Armchair',
     cena:5000,
     productUrl:'../../assets/living-room-table.jpg',
     type:'living room'
   },
   {
     naziv:'Cosy couch',
     cena:40000,
     productUrl:'../../assets/living-room-table.jpg',
     type:'bedroom'
   },
]



  constructor() { }
}
