import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { LimitStringPipe } from './pipes/limit-string.pipe';
import { EmployeesFormComponent } from './utils/employees-form/employees-form.component';



@NgModule({
  declarations: [
    NavbarComponent,
    LimitStringPipe,
    EmployeesFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
