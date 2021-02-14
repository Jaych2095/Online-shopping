import { Component, OnInit } from '@angular/core';
import {MessengerService} from "../shared/messenger.service";
import {Product} from "../shared/product";
import {CartService} from "../shared/cart.service";
import {CartItem} from "../shared/cart-item";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private msg: MessengerService,
    private cartService: CartService) { }
  cartItems = [];

  cartTotal = 0

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
  }
  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
    })
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calcCartTotal();
    })
  }

  calcCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

}
