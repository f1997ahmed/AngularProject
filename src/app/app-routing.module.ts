import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ShowProductComponent } from 'src/app/ProductModule/show-product/show-product.component';
import { ProductDetailsComponent } from './ProductModule/product-details/product-details.component';
import { NewProductComponent } from './ProductModule/new-product/new-product.component';
import {CartComponent} from 'src/app/cart/cart.component'
import { WishListComponent } from './wish-list/wish-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './categoryModule/index/index.component';
import { UpdateCategoryComponent } from './categoryModule/update-category/update-category.component';
import { AddCategoryComponent } from './categoryModule/add-category/add-category.component';

const routes: Routes = [
  {path: '', redirectTo:"/home",pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path:'Admin',component:DashboardComponent},
  {path: 'Register', component:RegisterComponent},
  {path: 'Login', component:LoginComponent},
  {path:'products',component:ShowProductComponent},
  {path:'productDetails/:id', component:ProductDetailsComponent},
  {path:'newproduct',component:NewProductComponent},
  {path:'Categorys',component:IndexComponent},
  {path:'CategorysUPdate/:id',component: UpdateCategoryComponent},
  {path:'AddCategory',component:AddCategoryComponent},
  {path:'cart',component:CartComponent},
  {path:'wish',component:WishListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
