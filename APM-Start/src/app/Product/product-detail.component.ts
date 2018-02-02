import { OnInit , Component } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router'
import { IProduct } from "./productInterface";
import { ProductService } from './product.service';


@Component({
    selector:'pm-product-detail',
    templateUrl:'./product-detail.component.html',
    styleUrls:['./product-detail.component.css']
})

//// TODO : http://jasonwatmore.com/post/2016/08/23/angular-2-pagination-example-with-logic-like-google

export class ProductDetailComponent implements OnInit
{
    
    public pageTitle : string = 'Product details';
    public product : IProduct;
    public maxRecordCount : number=1;
    constructor(private _routeParam:ActivatedRoute, 
        private _router : Router,
        private _productService : ProductService){

    }

    onBack():void{
        this._router.navigate(['/products']);
    }

    onNext(nextCounter : number):void{
          if(nextCounter > 0 &&
                this._productService.ProductCollection.length -1 >= nextCounter)
                {
                    nextCounter= nextCounter +  1;                   
                    this.getProductDetails(nextCounter);
                    if(this.product)
                    {
                        this.pageTitle = ` Product Title : ${this.product.productId} : ${this.product.productName} `
                        this.maxRecordCount = this._productService.ProductCollection.length;
                        this.maxRecordCount= this.maxRecordCount - nextCounter;
                        this._router.navigate(['/products',nextCounter]); 
                    }
                }
    }

    ngOnInit(){

        // + is useded here to convert the string value to intger value.
        let id = +this._routeParam.snapshot.paramMap.get('id');
        
        if(this._productService.ProductCollection){          
             this.getProductDetails(id)
             this.pageTitle = ` Product Title  : ${id} : ${this.product.productName} `
        }
        else
        {
            this.onBack();
        }

       
    }

    getProductDetails(id : number) : void {
        this.product = this._productService.ProductCollection.filter((product:IProduct)=>
        product.productId == id)[0];
    }

}