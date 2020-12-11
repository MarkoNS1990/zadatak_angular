import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api'
import {InMemoryLibrary} from'./in-memory-library';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormComponent } from './form/form.component';
import{Routes,RouterModule} from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { ShortenPipe } from './shorten.pipe';

import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './spinner/spinner.component';
import { AboutComponent } from './about/about.component';




const appRoutes:Routes = [
  {path:'',component:MainComponent},
  {path:'about',component:AboutComponent},
  {path:'shop',component:ShopComponent},
  {path:'shop/:id',component:ProductItemComponent},
  {path:'shopping-cart',component:ShoppingCartComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'checkout',component:CheckoutComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    ProductListComponent,
    FormComponent,
    ShopComponent,
    ShortenPipe,
    ProductItemComponent,
    ShoppingCartComponent,
    LoginComponent,
    SignupComponent,
    CheckoutComponent,
    SpinnerComponent,
    AboutComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryLibrary,{dataEncapsulation:false}),
    HttpClientModule,
    BrowserAnimationsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
