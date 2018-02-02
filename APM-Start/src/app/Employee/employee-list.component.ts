import { Component, OnInit } from '@angular/core';
import { IEmployeeList } from './employee-list.interface';
import { EmployeeDetailsService } from './employee-details.service';
import { error } from 'util';

@Component({
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers:[EmployeeDetailsService]
})
export class EmployeeListComponent implements OnInit {

  public pageTitle : string = 'Employee List'
  public EmployeeList : IEmployeeList[];
  private errorMessage : string;
  constructor(private _employeeService : EmployeeDetailsService) { }

  ngOnInit() {
    
      this._employeeService.getEmployeeList()
        .subscribe(data=> {
            this.EmployeeList = data;
        },
      error=>this.errorMessage = error);
  }


  addNew():void{
    
  }

  deleteEmployee(empCode: string, empId : number):void{
   alert(`Are You sure you wnat to delete Employee ${empCode}`);

    //this._employeeService.deleteEmployee(empId).subscribe(
   //   responseData => console.log('response Received' + responseData)
   // );

    this._employeeService.addEmployee();
  }
}
