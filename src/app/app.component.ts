import { Component } from '@angular/core';
import firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Zadatak-Angular';

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyDItrzNljN4_8sfc7VUf_CjZb8Crv_JslY",
      authDomain: "fortisi-shop.firebaseapp.com",
    })
    
   
  }
  
}
