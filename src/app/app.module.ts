import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { FormComponent } from './form/form.component';
import{Routes,RouterModule} from '@angular/router';
import { ShopComponent } from './shop/shop.component';

const appRoutes:Routes = [
  {path:'',component:MainComponent},
  {path:'shop',component:ShopComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    ProductComponent,
    FormComponent,
    ShopComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
