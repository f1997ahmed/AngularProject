import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import  {RegisterComponent} from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {Observable} from 'rxjs'
import { ProductService } from './Services/product.service';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './ProductModule/product-details/product-details.component';
import { NewProductComponent } from './ProductModule/new-product/new-product.component';
import { ShowProductComponent } from './ProductModule/show-product/show-product.component';
import { CartComponent } from './cart/cart.component';
import { WishListComponent } from './wish-list/wish-list.component';
import {​​​​​​​IndexComponent}​​​​​​​ from './categoryModule/index/index.component';
import{​​​​​​​UpdateCategoryComponent }​​​​​​​ from './categoryModule/update-category/update-category.component';   
 import{​​​​​​​AddCategoryComponent}​​​​​​​ from './categoryModule/add-category/add-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ShowProductComponent,
    ProductDetailsComponent,
    NewProductComponent,
    CartComponent,
    WishListComponent,
    AddCategoryComponent,
    UpdateCategoryComponent ,
    IndexComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [HttpClientModule,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
