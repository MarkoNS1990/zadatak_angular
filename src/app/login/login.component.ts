import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  onSubmit(form:NgForm){
    console.log(`${form.value.email} is logged in.`)
    form.reset()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
