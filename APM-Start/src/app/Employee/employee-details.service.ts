import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http/';
import { RequestOptions } from '@angular/http/';
import { IEmployeeList } from './employee-list.interface';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class EmployeeDetailsService {

  private _employeeUrl = 'http://localhost/employeService/api/v1/';
  constructor(private _http : HttpClient) { }

  getEmployeeList(): Observable<IEmployeeList[]>{
      let url = this._employeeUrl + 'Employee/';
      return  this._http.get<IEmployeeList[]>(url)
        .catch(this.logHttpErrors);
  }

  deleteEmployee(employeeId : number) : Observable<any> {
    let url = this._employeeUrl +'Employee/'+ employeeId;
    return this._http.delete(url)
    .catch(this.logHttpErrors);
  }

  addEmployee():void{
    //let headers = new Headers();
    //headers.append('Content-Type', 'application/json');
    console.log('Add new');
    let data  = 
        {
          "firstName": "Mr.Alex",
          "lastName": "Smith",
          "gender": "Male",
          "salary": 10639.3430,
          "employeeCode": "EMP001",
          "dateOfBirth": "1979-05-05"
        }
        let url = this._employeeUrl +'Employee/';
       this._http.post(url,data).subscribe(d=>console.log(d));
  }

  logHttpErrors(err : HttpErrorResponse){
        console.log(err);
      return Observable.throw(err);
  }

 
}
