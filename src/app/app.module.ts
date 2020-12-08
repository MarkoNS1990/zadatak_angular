import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { CheckoutComponent } from './checkout/checkout.component';




const appRoutes:Routes = [
  {path:'',component:MainComponent},
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
    
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
