import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  constructor() { }
  @Input() cartItem: any;
  ngOnInit(): void {
  }

}
