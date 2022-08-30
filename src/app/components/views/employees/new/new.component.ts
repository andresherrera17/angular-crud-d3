import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IEmployee } from 'src/app/interfaces/employees.interface';
import { EmployeesService } from 'src/app/services/employees.service';
import { MessagesService } from 'src/app/services/messages.service';
import { EmployeesFormComponent } from '../../shared/utils/employees-form/employees-form.component';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit,AfterViewInit {
  text2:string = ""
  @ViewChild(EmployeesFormComponent) employee: EmployeesFormComponent;
  constructor(
    private _employeeService: EmployeesService,
    private _messageService: MessagesService
    ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log('new',this.employee.text);
  }

  addEmployee(employee:IEmployee){
    this._employeeService.addEmployee(employee)
      .then(res => {
        this._messageService.successMessage("Empleado agregado", "El empleado ha sido agregado exitosamente");
      })
      .catch(err => {
        this._messageService.errorMessage("Error", "No fue posible agregar añl empleado", err.message);
      })
  }
}
