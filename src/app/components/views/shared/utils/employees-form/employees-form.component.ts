import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEmployee } from 'src/app/interfaces/employees.interface';


@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.css']
})
export class EmployeesFormComponent implements OnInit,AfterViewInit  {

  @ViewChild('titulo') titulo:ElementRef = new ElementRef({});

  @Output() eventSave = new EventEmitter<IEmployee>();

  employeeForm: FormGroup = new FormGroup({});

  text:string = "Hola";

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngAfterViewInit(): void {
    console.log(this.titulo);
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
      this.text = "eeeee"
      this.employeeForm.markAllAsTouched();
      return;
    }

    this.eventSave.emit(this.employeeForm.value);
  }

  showWarning(controlName: string) {
    return this.employeeForm.get(controlName)!.invalid && this.employeeForm.get(controlName)!.touched;
  }

  get name(): AbstractControl | null { return this.employeeForm.get('name') };
  get lastName(): AbstractControl | null { return this.employeeForm.get('lastName') };
  get email(): AbstractControl | null { return this.employeeForm.get('email') };
  get startDate(): AbstractControl | null { return this.employeeForm.get('startDate') };


}
