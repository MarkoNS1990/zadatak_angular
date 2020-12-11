import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase'



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoading = false
  token:string
  error:string = null
  success:string=null
  logSuccess:string=null
  logError:string=null

  signup(email:string, password:string){
    this.error=null
    
    this.isLoading=true
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoading=false
      this.success=res.user.email
      setTimeout(() => {
        this.success=null
      }, 3000);
      this.router.navigate(['/'])
      
    }).catch(err=>{
      this.error=err.message
      this.isLoading=false

    })
  }
  login(email:string,password:string){
    
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.logSuccess=res.user.email
      this.router.navigate(['/'])
      setTimeout(() => {
        this.logSuccess=null
      }, 3000);
      firebase.auth().currentUser.getIdToken()
      .then(
        (token:string)=>{
          this.token=token
          
        }
      )

      console.log('User logged in');
    }).catch(err=>{
      this.isLoading=false
      this.logError=err.message
      setTimeout(() => {
        this.logError=null
      }, 3000);
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
