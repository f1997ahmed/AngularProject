
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { IProduct } from 'src/app/Shared_Interfaces/IProduct';
import { ActivatedRoute ,Router} from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { isNgTemplate } from '@angular/compiler';
import { HeaderComponent } from 'src/app/header/header.component';
import { WishListService } from 'src/app/Services/wish-list.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.scss']
})
export class ShowProductComponent implements OnInit
 {
  allProduct:IProduct[]; 

  product:IProduct;
  constructor(private wish:WishListService, private productService:ProductService,private route: ActivatedRoute,private router: Router ,private cartService:CartService)
   { }
  errorMsg:string;
  ngOnInit(): void
   {
   /* this.ProductForm= this.formbulider.group({  
       Name: ['', [Validators.required]],  
       Id: ['', [Validators.required]],  
       Price: ['', [Validators.required]],  
      Quantity: ['', [Validators.required]],  
     Description: ['', [Validators.required]],  
     Image: ['', [Validators.required]], 
    CategoryID:['', [Validators.required]],  
    });  */
    this.LoadAllProduct();
    this.item()
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
 /*LoadProductById(ProductId:number)
    {
      this.productService.getProductById(ProductId).subscribe(
        ProductData=>
        {
          this.product=ProductData;
          console.log(this.product);
        },
        errorResponse=>
        {
          this.errorMsg=errorResponse;
        }
      )
    }*/
 ProductById(ProductId:number)
 {
 //  this.product=[];
   this.router.navigate(['/products',ProductId])
 }
 ////////////////////////////////
  addCart(Product:IProduct)
  {
    this.cartService.addProduct(Product);
    this.router.navigate(['/cart'])
  }
  addwishList(Product:IProduct)
  {
    this.wish.addToWishList(Product);
    this.router.navigate(['/wish'])
  }
  cartItem:number = 0;
   item():number
  {
    this.cartItem=this.cartService.display();
     return this.cartItem;
    //console.log(this.cartItem);
  }
  //this.cartItem=this.cartCount.length;
}

