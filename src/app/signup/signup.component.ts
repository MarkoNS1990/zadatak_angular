import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isLoading=this.authService.isLoading
  onSubmit(form:NgForm){
    this.isLoading=true
    console.log(`${form.value.email} is signed up.`)
    if(!form.valid){
      return
    }
    const email=form.value.email
    const password=form.value.password
    
    this.isLoading=true
    this.authService.signup(email,password)
    setTimeout(() => {
      this.isLoading=false
    }, 1500);
    
    
    

    form.reset()
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    
  }

}
