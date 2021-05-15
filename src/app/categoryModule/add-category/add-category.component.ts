import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators ,FormGroup, FormControl, Form} from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/Shared_Interfaces/category';
import { CategoryService } from 'src/app/Services/category.service';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

 
  constructor(private fb:FormBuilder,private categoryService:CategoryService,private router :Router) { }
  categoryList:Category []=[];
  errorMsg: any;
  dataSaved=false;
  
  massage: any;
  CategoryId: number=0;
  addCategoryForm!:FormGrop
  ngOnInit(): void {
    this.addCategoryForm=this.fb.group({
      CategoryName:['',[Validators.required]],
      Description :['',[Validators.required]],
    })
   this.getCategory();
 
  }
  get CategoryName()
  {
    return this.addCategoryForm.get('CategoryName')
  }
  get Description(){

    return this.addCategoryForm.get('Description')
  }
  getCategory(){
    this.categoryService.returnAllCategory().subscribe((Data)=>{
      this.categoryList=Data;
    },(err)=>{
    this.errorMsg=err;
    })
  }
Reset() {  
  this.addCategoryForm.reset();  
 } 
addCategory(category: Category) {  
  debugger;  
  category.Id= this.CategoryId;  
  this.categoryService.addCategory(category).subscribe(  
   () => {  
    this.dataSaved = true;  
    this.massage = 'Record saved Successfully';  
    this.Reset();  
    this.CategoryId = 0; 
    this.getCategory();      
   });  
   this.router.navigate(['/Category/Index']);
 } 


}
