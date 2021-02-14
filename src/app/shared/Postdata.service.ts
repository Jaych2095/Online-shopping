import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { Injectable } from "@angular/core";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import { Product } from "./product";
import {User} from "./user";
interface AuthResponseData{
    idToken:string,
    email:string,
    refreshToken:string,
    expiresIn:string,
    localId:string,
    registered?:boolean
}
@Injectable()

export class PostService{
    public data:Product[]=[];
    public user:User[]=[];
   
    constructor(private http:HttpClient)
    {

    }
    public getData():Observable<Product[]>{
        return this.http.get<Product[]>("https://fakestoreapi.com/products/");
    }

   // public register(userdata:User)
    //{
      //  return this.http.post('https://reqres.in/api/users', '{ "first_name": userdata.firstName, "last_name": userdata.lastName }')
    //}
    public register(email:string, password:string)
    {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCqZy3QbPmMa1lHe6E5x0WL50Csl1l4FbI',
        {
            email:email,
            password:password,
            returnSecureToken:true
        })
        .pipe((catchError(this.handleerror)));
    }
    public login(email:string, password:string)
    {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCqZy3QbPmMa1lHe6E5x0WL50Csl1l4FbI',
        {
            email:email,
            password:password,
            returnSecureToken:true
        })
        .pipe((catchError(this.handleerror)));
    }
    public getParticularData(id:number):Observable<Product[]>{
        return this.http.get<Product[]>("https://fakestoreapi.com/products/"+id);
    }
    private handleerror(errres:HttpErrorResponse)
    {
        let errorMessage = 'An unknown error occured!';
        if(!errres.error || !errres.error.error){
            return throwError(errorMessage);
        }
        switch(errres.error.error.message){
            case 'EMAIL_EXISTS':
                errorMessage='This email is already exist';
        }
        return throwError(errorMessage);
        
    }
}