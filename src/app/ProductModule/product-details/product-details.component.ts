import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app//Services/product.service';
import { IProduct } from 'src/app/Shared_Interfaces/IProduct';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute ,ParamMap,Router} from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit
 {
  product:IProduct;
   pageTitle = 'Product Detail'; 
  constructor(private productService:ProductService,private route: ActivatedRoute,private router: Router) { }
  errorMsg:string;
  ngOnInit(): void
   {
     /*this.route.paramMap.subscribe((params:ParamMap)=>
     {
         this.ProductId=parseInt(params.get('id'));
     })*/
    const param=this.route.snapshot.paramMap.get('id');
    if(param)
    {
       const id=+param;
    
      this.loadProductById(id);
    }
    } 
    loadProductById(ProductId:number)
    {
      this.productService.getProductById(ProductId).subscribe(
        ProductData=>
        {
          this.product=ProductData;
        },
        errorResponse=>
        {
          this.errorMsg=errorResponse;
        }
      )
      console.log(this.product);
    }
  onBack(): void {
    this.router.navigate(['/products']);
  }
}

