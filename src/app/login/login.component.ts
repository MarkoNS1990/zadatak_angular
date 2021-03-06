import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading=this.authService.isLoading

  onSubmit(form:NgForm){
    console.log(`${form.value.email} is logged in.`)
    const email=form.value.email
    const password=form.value.password
    this.isLoading=true
    this.authService.login(email,password)
    setTimeout(() => {
      this.isLoading=false
    }, 1500);
    form.reset()
  }

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

}
