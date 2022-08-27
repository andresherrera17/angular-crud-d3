import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IEmployee } from 'src/app/interfaces/employees.interface';
import { EmployeesService } from 'src/app/services/employees.service';
import { EmployeesFormComponent } from '../../shared/utils/employees-form/employees-form.component';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit,AfterViewInit {
  text2:string = ""
  @ViewChild(EmployeesFormComponent) employee: EmployeesFormComponent;
  constructor(private _employeeService: EmployeesService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log('new',this.employee.text);
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
