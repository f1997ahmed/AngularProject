import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app//Services/product.service';
import { IProduct } from 'src/app/Shared_Interfaces/IProduct';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute ,Router} from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import { Category } from 'src/app/Shared_Interfaces/category';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  allProduct:IProduct[];
  ProductForm: any;  
  dataSaved=false;  
   massage='';  
   allCategory:Category[];
  productIdUpdate:number;  
  constructor(private categoryService:CategoryService,private formbulider:FormBuilder,private productService:ProductService,private route:Router,private activeRoute:ActivatedRoute) { }
  errorMsg:string;
  ngOnInit(): void
   {
    this.ProductForm= this.formbulider.group({  
       Name: ['', [Validators.required]],  
       Id: ['', [Validators.required]],  
       Price: ['', [Validators.required]],  
      Quantity: ['', [Validators.required]],  
     Description: ['', [Validators.required]],  
     Image: ['', [Validators.required]], 
    CategoryID:['', [Validators.required]],  
    });  
   this.LoadAllProduct();  
   this.getAllCategory();
   }
   get f() { 
    return this.ProductForm.controls; 
  }
   LoadAllProduct()
   {
  
       this.productService.getAllProduct().subscribe(
      ProductData=>
      {
         this.allProduct=ProductData;
      },
      errorResponse=>
      {
        this.errorMsg=errorResponse;
      }
    )
  }
  onFormSubmit() {  
    this.dataSaved = false;  
    const product = this.ProductForm.value;  
    this.CreateProduct(product);  
    this.ProductForm.reset();  
  }  
  loadProductById(ProductId:number)
  {
    this.allProduct=[];
    this.productService.getProductById(ProductId).subscribe(
      ProductData=>
      {
        this.allProduct.push(ProductData);
      },
      errorResponse=>
      {
        this.errorMsg=errorResponse;
      }
    )
  }
  deleteProduct(ProductId:number) 
  {  
    if (confirm("Are you sure you want to delete this ?")) {   
    this.productService.deleteProductById(ProductId).subscribe(()=>{  
      this.dataSaved = true;  
      this.massage='Record Deleted Succefully';  
      this.LoadAllProduct();  
     // this.employeeIdUpdate = null;  
     // this.employeeForm.reset();  
  
       });  
     }     
  }
  getAllCategory()
  {
    this.categoryService.returnAllCategory().subscribe(Data=>
    {
      this.allCategory=Data;
      
    },
    errorResponse=>
    {
      this.errorMsg=errorResponse;
    }
    )
    console.log(this.allCategory);
  }
  //////////////////
  loadProductToEdit(ProductId:number) {  
    this.productService.getProductById(ProductId).subscribe(product=> {  
      this.massage='';  
      this.dataSaved=false;  
      this.productIdUpdate=product.Id;  
      this.ProductForm.controls['Name'].setValue(product.Name);  
     this.ProductForm.controls['Id'].setValue(product.Id);  
      this.ProductForm.controls['Price'].setValue(product.Price);  
      this.ProductForm.controls['Quantity'].setValue(product.Quantity);  
      this.ProductForm.controls['Description'].setValue(product.Description);  
      this.ProductForm.controls['Image'].setValue(product.Image); 
      this.ProductForm.controls['CategoryID'].setValue(product.CategoryID);   
    });  
  
  }  
  //this.ProductForm.controls['Image'].setValue(product.Image);  
  CreateProduct(product:IProduct)
   {  
    if (this.productIdUpdate == null) 
    {  
       this.productService.createProduct(product).subscribe(  
        () => {  
          this.dataSaved = true;  
          this.massage = 'Record saved Successfully';  
          this.LoadAllProduct();  
        //  this.productIdUpdate=null;  
          this.ProductForm.reset();  
        }  
      );  
    }

    else
    {  
      product.Id = this.productIdUpdate;  
      this.productService.updateProduct(product).subscribe(() => {  
        this.dataSaved = true;  
        this.massage = 'Record Updated Successfully';  
        this.LoadAllProduct();  
       // this.productIdUpdate=null;  
        this.ProductForm.reset();  
      });  
    }  
  }   
  resetForm() {  
    this.ProductForm.reset();  
    this.massage = '';  
    this.dataSaved = false;  
  }  
}

