import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  payments=['Credit Card','Paypal','Pay On Delivery']
  checkoutForm: FormGroup;
  constructor(private router:Router,public cartService:CartService) { }

  ngOnInit(): void {
    this.checkoutForm= new FormGroup({
      'name':new FormControl(null,Validators.required),
      'lastName':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'phone':new FormControl(null,Validators.required),
      'adress':new FormControl(null,Validators.required),
      'payment':new FormControl('Credit Card'),
    })
  }

  onSubmit(){
    console.log(this.checkoutForm.value.name);
    this.checkoutForm.reset()
    this.router.navigate(['/'])
    this.cartService.cart=[]
  }

}
