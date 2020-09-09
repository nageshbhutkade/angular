import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Employee } from '../employee';
import { EmplyeeserviceService } from '../employeeservice';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regForm: FormGroup;
  datasaved = false;
  massage: string;
  constructor(private formbuilder: FormBuilder, private employeeservice: EmplyeeserviceService) { }

  ngOnInit() {
    this.setFormState();
  }
  setFormState(): void {
    this.regForm = this.formbuilder.group({
      // LastName: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit() {
    
    let employee = this.regForm.value;
    this.createemployee(employee);
    this.regForm.reset();
  }
  createemployee(employee: Employee) {
    this.employeeservice.createemployee(employee).subscribe(
      () => {
        this.datasaved = true;
        this.massage = "User Created";
       this.regForm.reset();
      }
    )
  }
}
