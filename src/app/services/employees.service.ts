import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { map } from 'rxjs';
import { IEmployee } from '../interfaces/employees.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  EMPLOYEES_COLLECTION:string = "employees";

  constructor(private _fireStore: AngularFirestore
  ) { }

  addEmployee(employee: IEmployee){
    return this._fireStore.collection<IEmployee>(this.EMPLOYEES_COLLECTION).add(employee);
  }

  getEmployess$(){
    return this._fireStore.collection<IEmployee>(this.EMPLOYEES_COLLECTION).snapshotChanges()
    .pipe(
      map(arreglo => arreglo.map(element => {
        return {
          id: element.payload.doc.id,
          ...element.payload.doc.data() as IEmployee
        }
      }))
    )
  }
}
