import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase'



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoading=false
  token:string
  signup(email:string, password:string){
    this.isLoading=true
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoading=false
      this.router.navigate(['/'])
      console.log('User registered');
    }).catch(err=>{
      console.log(err);
    })
  }
  login(email:string,password:string){
    
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(res=>{
      
      this.router.navigate(['/'])
      
      firebase.auth().currentUser.getIdToken()
      .then(
        (token:string)=>{
          this.token=token
        }
      )

      console.log('User logged in');
    }).catch(err=>{
      this.isLoading=false
      console.log(err);
      console.log('error');
    })
  }

  registeredUser(){
    return this.token !=null
  }

  logOut(){
    firebase.auth().signOut()
    this.token=null
    this.router.navigate(['/'])
    this.isLoading=false
  }

  constructor(private http: HttpClient,private router:Router) { }
}
