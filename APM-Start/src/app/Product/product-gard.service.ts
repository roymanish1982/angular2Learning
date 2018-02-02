import { Injectable } from '@angular/core';
import { CanActivate , ActivatedRouteSnapshot ,Router} from '@angular/router';



@Injectable()
export class ProductGardService implements CanActivate {

  constructor(private _route : Router) { }
  canActivate(route : ActivatedRouteSnapshot):boolean{
    let id = +route.url[1].path;
    if(isNaN(id) || id < 1)
    {
      //TO Navigate to  he Exception page.
      alert(`invalid parameter value ${+route.url[1].path}`);
      this._route.navigate(['/product']);
    }
    return true;
  }

}
