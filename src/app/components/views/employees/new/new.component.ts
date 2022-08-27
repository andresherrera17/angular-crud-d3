import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/interfaces/employees.interface';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private _employeeService: EmployeesService) { }

  ngOnInit(): void {
  }

  addEmployee(employee:IEmployee){
    this._employeeService.addEmployee(employee)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }
}
