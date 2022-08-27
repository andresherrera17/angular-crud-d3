import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployee } from 'src/app/interfaces/employees.interface';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees: IEmployee[] = [];

  constructor(
    private _employeesService: EmployeesService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this._employeesService.getEmployess$().subscribe(data => {
      this.employees = data;
    })
  }

  edit(id:string){
    this.router.navigate(['edit',id]);
  }

  delete(id:string){
    this._employeesService.deleteEmployee(id)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }
}
