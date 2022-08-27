import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private _employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this._employeesService.getEmployess$().subscribe(data => {
      console.log(data);
    })
  }
}
