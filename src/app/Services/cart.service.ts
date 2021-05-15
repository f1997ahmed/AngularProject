import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Subject,Observable } from 'rxjs';
import { BehaviorSubject,Subscriber,Subject,Observable} from 'rxjs';
import { IProduct } from '../Shared_Interfaces/IProduct';
//import {of} from 'rxjs';
 //cartSubject=new Subject<any>();

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpclient:HttpClient) { }
  public cartSubject = new Subject<any>();
  Products :IProduct[]=[];
  CartState = this.cartSubject.asObservable();
  addProduct(product:IProduct) 
  {
    //console.log('in service');
    this.Products.push(product)
  }
  getAllItems():IProduct[]
  {
  // console.log(this.Products)
    return this.Products;
  }
  display():number
   {
    return this.Products.length;
   }
   removeProduct(id:number)
    {
      this.Products=this.Products.slice(id,1)
    //this.cartSubject.next(<CartState>{loaded: false , products:  this.Products});
   }

}
