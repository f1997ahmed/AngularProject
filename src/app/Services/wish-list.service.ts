import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from 'src/app/Shared_Interfaces/IProduct';
import { Observable,throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  url:string;
  Products :IProduct[]=[];
  constructor(private http:HttpClient)
   {   
     this.url="http://localhost:61596/api/Products";
    }
  getAllitemWishList():IProduct[]
  {
    /*return this.http.get<IProduct[]>(this.url).pipe(catchError((err)=>
    {
      return throwError(err.message ||"Internal Server error contact site adminstarator");
    }));*/
    return this.Products;
   
  }
  
  delete_Item_From_WishList(productId:number)
   {
    this.Products=this.Products.slice(productId,1)  
   /* const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '/DeleteProduct?id=' +productId,  
     httpOptions); */ 
  }
  addToWishList(product:IProduct)
  {
    this.Products.push(product)  
   /* const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<IProduct>(this.url + '/PostProduct/',  
    product, httpOptions); */
  }  
}
