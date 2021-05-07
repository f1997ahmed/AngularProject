import { Injectable } from '@angular/core';  
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable } from 'rxjs'; 
 
import { IRegister } from '../Shared_Interfaces/IRegister';

@Injectable({  
  providedIn: 'root'  
})  
export class LoginService {  
  UrlReg :string; 
  UrlLog :string;
  token : string='';  
  header : any;  
  constructor(private http : HttpClient) {   

    this.UrlReg = "http://localhost:61596/api/Account"; 
    this.UrlLog = "http://localhost:61596/login";

    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
  }  
   Login(model : any){ 
    console.log("login"); 
   /*  debugger;  */   
   console.log(this.header);
   console.log(model)
   var reqHeader = new HttpHeaders({ 
     'Content-Type': 'application/x-www-form-urlencoded','No-Auth':'True' })

   
   return this.http.post(this.UrlLog,model,{ headers: reqHeader});  
 
  }   
   CreateUser(register:IRegister)  
   { 
    console.log("Saved"); 
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.http.post<IRegister[]>(this.UrlReg+'/registration/' , register, httpOptions)  
   }  
}  