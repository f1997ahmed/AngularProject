import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { CartService } from '../Services/cart.service';
import { WishListService } from '../Services/wish-list.service';
import { IProduct } from '../Shared_Interfaces/IProduct';
@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  itemCart:IProduct[]=[];
  constructor(private wish:WishListService,private cartService:CartService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.getwishItem();
  }
  DeleteItem(productId:number)
  {
    console.log(this.itemCart);
    if(this.itemCart)
    {
     this.itemCart = this.wish.getAllitemWishList();
      for(let i=0; i<this.itemCart.length; i++)
         {
            if(this.itemCart[i].Id===productId)
            {
              
             this.itemCart.splice(i, 1);
               this.getwishItem();
             }
          }
    }
 }
  getwishItem()
  {
    this.itemCart=this.wish.getAllitemWishList();
  }
  addCart(Product:IProduct)
  {
    this.cartService.addProduct(Product);
    this.router.navigate(['/cart'])
  }
}
