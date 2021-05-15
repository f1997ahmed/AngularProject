import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from 'src/app/Shared_Interfaces/category';

import { CategoryService } from 'src/app/Services/category.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {


  constructor(private fb: FormBuilder,private categoryService:CategoryService) { }
  categoryList:Category [];
  errorMsg: any;
  dataSaved=false;
  massage: string;
  CategoryId: number=0;
  addCategoryForm:any;

  ngOnInit(): void {
    this.addCategoryForm=this.fb.group({
      CategoryName:['',[Validators.required]],
      Description:['',[Validators.required]]
    })
   this.getCategory();
 
  }
  getCategory(){
    this.categoryService.returnAllCategory().subscribe(
    (Data)=>{
      this.categoryList=Data;
     },
    (err)=>{
    this.errorMsg=err;
    })
  }

  deleteCategory(id:any){
    if (confirm("Are You Sure To Delete this Informations")) {  
  this.categoryService.deleteCategory(id)
  .subscribe(() => {
    console.log('Deleted'); 
     this.getCategory();
  }, (err) => {
    console.log(err);
  });

}  }

Reset() {  
  this.addCategoryForm.reset();  
 } 


}
