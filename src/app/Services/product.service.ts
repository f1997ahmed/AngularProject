import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from 'src/app/Shared_Interfaces/IProduct';
import { Observable,throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url:string;

  constructor(private http:HttpClient)
   {   
     this.url="http://localhost:61596/api/Products";
    }
  getAllProduct():Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>(this.url).pipe(catchError((err)=>
    {
      return throwError(err.message ||"Internal Server error contact site adminstarator");
    }));
  }
  getProductById(productId:number):Observable<IProduct> 
  {   
     return this.http.get<IProduct>(this.url+'/GetProduct/'+productId);
  } 
  deleteProductById(productId:number):Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '/DeleteProduct?id=' +productId,  
 httpOptions);  
  }
  
  updateProduct(product: IProduct):Observable<IProduct> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<IProduct>(this.url + '/PutProduct/',  
    product, httpOptions);  
  }  

  createProduct(product:IProduct):Observable<IProduct> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<IProduct>(this.url + '/PostProduct/',  
    product, httpOptions);  
  }  
}
