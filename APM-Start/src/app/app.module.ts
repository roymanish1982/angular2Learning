import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Need to import in order to support
// ngModel
import { FormsModule } from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

// Need for Routing

import {RouterModule} from '@angular/router'


import { AppComponent } from './app.component';
import { ProductListComponent } from './Product/product-list.component';
import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent} from './Product/product-detail.component';
import { WelcomeComponent} from './home/welcome.component';
import { ProductGardService } from './Product/product-gard.service';
import { EmployeeListComponent } from './Employee/employee-list.component';

@NgModule({ 
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacePipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
          { path:'products',component:ProductListComponent }
        , {path:'products/:id', 
            canActivate:[ProductGardService],
            component:ProductDetailComponent}
        , {path:'welcome',component:WelcomeComponent}
        , {path:'employee', component:EmployeeListComponent}
        , {path:'employee/:id', component:EmployeeListComponent}
        , {path:'', redirectTo:'welcome',pathMatch:'full'}
        , {path: '**',redirectTo:'welcome',pathMatch:'full'}
      ]
  )
  ],
  providers: [ProductGardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
