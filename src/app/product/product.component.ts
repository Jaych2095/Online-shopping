import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../shared/Postdata.service';
import { Product } from '../shared/product';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productdata:Product[]=[];
  isLoading=true;
  constructor(private http:HttpClient, private sharedservice:PostService,private route:ActivatedRoute) { }
  public id:number;
  ngOnInit(): void {
    if(this.route.snapshot.params.id)
    {
      this.id=this.route.snapshot.params.id;
    }
    this.onFetchPosts(this.id);
   
  }
  public onFetchPosts(id:number) {
    this.sharedservice.getParticularData(id).subscribe(
      responseData=>{
        this.productdata=responseData;
        console.log(this.productdata);
        this.isLoading=false;
        //this.isLoading=false;//this.totalPages=responseData['total_pages'];
      }
    );
  }

}
