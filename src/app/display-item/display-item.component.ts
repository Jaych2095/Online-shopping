import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MessengerService} from '../shared/messenger.service';
import { PostService } from '../shared/Postdata.service';
import { Product } from '../shared/product';
import {Router } from '@angular/router';
import {CartService} from '../shared/cart.service';
import { NotificationService } from '../notification.service';
@Component({
  selector: 'app-display-item',
  templateUrl: './display-item.component.html',
  styleUrls: ['./display-item.component.css']
})
export class DisplayItemComponent implements OnInit {
  userdata:Product[]=[];
  isLoading=false;
  @Input() productItem: Product;
  constructor(private toaster:NotificationService,private http:HttpClient, private sharedservice:PostService, private cartService:CartService, private msg:MessengerService,private router: Router,) { }

  ngOnInit(): void {
    this.onFetchPosts();
    this.isLoading=true;
  }
 handleAddToCart(index:number) {
    this.cartService.getCartItems().subscribe(() => {
      this.toaster.showSuccess("Successfully Added","Add to cart says:")
    })
  }
  
  public onFetchPosts() {
 
    this.sharedservice.getData().subscribe(
      responseData=>{
        this.userdata=responseData;
        console.log(this.userdata);
        this.isLoading=false;//this.totalPages=responseData['total_pages'];
      }
    );
  }
  onlogout()
  {
    this.sharedservice.loggedout();
    this.toaster.showSuccess("Please visit us again","Successfully Logged Out");
    this.router.navigate(['/login']);
  }
}
