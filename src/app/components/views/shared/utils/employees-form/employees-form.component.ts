import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.css']
})
export class EmployeesFormComponent implements OnInit {


  employeeForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.employeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      startDate: ['', [Validators.required]]
    })
  }

  onSubmit() {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }
  }

  showWarning(controlName: string) {
    return this.employeeForm.get(controlName)!.invalid && this.employeeForm.get(controlName)!.touched;
  }

  get name(): AbstractControl | null { return this.employeeForm.get('name') };
  get lastName(): AbstractControl | null { return this.employeeForm.get('lastName') };
  get email(): AbstractControl | null { return this.employeeForm.get('email') };
  get startDate(): AbstractControl | null { return this.employeeForm.get('startDate') };


}
