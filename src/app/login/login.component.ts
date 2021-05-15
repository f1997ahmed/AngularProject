import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';    
import { LoginService } from 'src/app/Services/login.service';    
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm:any;
  /*  LoginForm=this.fb.group({
    Name :['',[Validators.required]],
    password:['',[Validators.required,Validators.minLength(6)]],
    }) */

    model : any={}; 
    submitted = false;   

    errorMessage:string=""; 
  constructor(private fb:FormBuilder,private ro:ActivatedRoute , private router:Router,private LoginService:LoginService ) { }

  ngOnInit() {   
    this.LoginForm=this.fb.group({
      Name :['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(6)]],
      })  
    sessionStorage.removeItem('UserName');    
    sessionStorage.clear();    
  } 
  login(y:any)
  { 
    console.log("login");   
  /*   debugger;  */   
  //this.submitted = true;
  //var userData = "UserName=" + this.LoginForm.value.Name + "&Password=" + this.LoginForm.value.password + "&grant_type=password";
  var userData ={
    UserName:this.Name?.value,
    Password:this.password?.value,
    grant_type: 'password',
  }
  localStorage.setItem("logged","true");
  if(userData.UserName=="admin"&&userData.Password=="admin")
  {
  
    localStorage.setItem("flag","true");
  }
  else{
    localStorage.setItem("flag","false");
  }
  this.LoginService.Login(userData).subscribe(    
      data => {    
   /*      debugger;   */  
        // if(data.Status=="Success")    
        // {       
        //   this.router.navigate(['/Home']);    
        // /*   debugger; */    
        // }    
        // else{    
        //   this.errorMessage = data.Message;    
        // }  
        console.log(data);  // contains object contain token and expire date
      },    
      error => {    
        this.errorMessage = error.message;    
      });   
      this.router.navigate(['/home']);  
     // this.router.navigate['/home'] 
  };

   get Name ()
  {
    return this.LoginForm.get('Name');
  }
  
  get password ()
  {
    return this.LoginForm.get('password');
  } 


}

