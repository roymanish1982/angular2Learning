
import { Component, OnInit } from "@angular/core";
import { IProduct } from "./productInterface";
import { ProductService } from "./product.service";

@Component({
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle : string = "Products List ";
    imageWidth  : number = 50;
    imageMargin : number = 2;
    showImage : boolean = true;
    private _filter:string;
    filterProductList : IProduct[];
    private  _productService : ProductService;
    products : IProduct[] ;
    private errorMessage : string;

    get filter():string{
            return this._filter;
    }

    set filter(value:string){
        this._filter = value;
        this.filterProductList = this._filter ? this.performFilter(this._filter): this.products;
    }
  
    constructor(productService : ProductService){
  
        this._productService = productService;
        this.filterProductList = this.products;
    }

    performFilter(filterBy : string): IProduct[]{
       filterBy = filterBy.toLowerCase();
        return this.products.filter((product:IProduct)=>
            product.productName.toLowerCase().indexOf(filterBy)!==-1);
    }

    toggleImage() : void{
            this.showImage = !this.showImage;
    }

    ngOnInit(): void{
           this._productService.getProducts()
           .subscribe(data=> {
               this.products = data;
               this.filterProductList = this.products;
            
               if(!this._productService.ProductCollection)
               {   
                  this._productService.ProductCollection = this.products;
               }
               
            },
        error=> this.errorMessage = error);
           
           
    }

        onNotifyEvent(message :  string):void{
            alert(`Received Event from Child component on clicking of the Starts.The Rating is ${message}`);
        }

    }