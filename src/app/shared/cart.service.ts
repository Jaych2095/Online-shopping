import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CartItem } from './cart-item';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  URL='https://fakestoreapi.com/carts/'
  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]> {
    //TODO: Mapping the obtained result to our CartItem props. (pipe() and map())
    return this.http.get<CartItem[]>("https://fakestoreapi.com/carts");
  }

  addProductToCart(id:number,product: Product): Observable<any> {
    return this.http.put('https://fakestoreapi.com/carts', {
      userid: 3,
      date: '2019-12-10',
      product: [{ productId: product.id, quantity: 3 }],
    });
  }
  public removeProduct(index: number) {
    return this.http.delete('https://fakestoreapi.com/products/' + index);
  }

  public changeProductQuantity(userId: number,index: number, productQuantity: number) {
    return this.http.put('https://fakestoreapi.com/carts/1', {
      userId: userId,
      date: '2019-12-10',
      products: [{ productId: index, quantity: productQuantity }],
    });
  }
}