import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ShowProductComponent } from '../ProductModule/show-product/show-product.component';
import { CartService } from '../Services/cart.service';
import { IProduct } from '../Shared_Interfaces/IProduct';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit
 {
   cartItem:number = 0;
  @ViewChild(ShowProductComponent)showproducts:ShowProductComponent;
  constructor(private cartService:CartService)
   {
   this.cartService.cartSubject.subscribe((data)=>{this.cartItem=data;});
   }
   flag:boolean;
   logFlag:boolean;
   LogOut()
   {
  
    localStorage.setItem("logged","false");
  }
ngOnInit(): void 
{
  //this.cartService.CartState.subscribe((data)=>{this.cartItem=data;});
  //console.log(this.cartItem);
 // this.cartItemFunc();
 if  (localStorage.getItem("flag")!=null && localStorage.getItem("flag")=="true"&&localStorage.getItem("logged")=="true") 
   {
     this.flag=true;
   }
   if(localStorage.getItem("logged")!=null&&localStorage.getItem("logged")=="true")
   {
     this.logFlag=true;
    // alert(this.logFlag)
   }
   else if(localStorage.getItem("logged")!=null&&localStorage.getItem("logged")=="false")
   {
  //   alert("jjjjjjj");
     this.logFlag=false;
   }
   else
   {
     this.flag=false;
   }
}
itemCount:IProduct[];
cartItemFunc()
{
  
   this.itemCount=this.cartService.getAllItems();
     console.log(this.cartService.getAllItems())
   
 } 
}
