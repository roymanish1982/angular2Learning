import { IProduct } from './productInterface';
import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ProductService{

    private _productUrl : string = './api/products/products.json';

    private _productCollection : IProduct[];

    get ProductCollection() : IProduct[]
    {
        return this._productCollection;
    }

    set ProductCollection(value : IProduct[])
    {
        this._productCollection = value; 
    }

    constructor(private _httpClient : HttpClient){

    }

    getProducts():Observable<IProduct[]>{

        return this._httpClient.get<IProduct[]>(this._productUrl)
        //.do(data => console.log(JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError (err : HttpErrorResponse){
           return Observable.throw(err);
    }
}