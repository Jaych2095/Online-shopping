import { NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DisplayItemComponent } from './display-item/display-item.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';

const appRoutes:Routes=[
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'search', component:SearchComponent},
    {path:'DisplayItem', component:DisplayItemComponent},
    {path:'search/:id', component:ProductComponent},
    {path:'cart', component:CartComponent}
    
]
@NgModule({
  imports:[
      RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule{

}