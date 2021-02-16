import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostService } from './shared/Postdata.service';
import { LoadingSpinnerComopnent } from './loading-spinner/loading-spinner.component';
import { DisplayItemComponent } from './display-item/display-item.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { AuthGuard } from './auth-guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComopnent,
    DisplayItemComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    NavigationComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()

  ],
  providers: [PostService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
