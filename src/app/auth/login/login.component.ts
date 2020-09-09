import { Component, OnInit } from '@angular/core';
import { Loginemployee } from './loginemployee';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { EmplyeeserviceService } from '../employeeservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  massage: string;
  Error = false;
  constructor( private employeeservice:EmplyeeserviceService, private formbuilder:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.setFormState();
  }
  setFormState(): void {
    this.loginForm = this.formbuilder.group({
      Username: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    })
  }
  onSubmit(){
    let login=this.loginForm.value;
    this.login(login);
  }
  login(loginEmployee: Loginemployee) {
    this.employeeservice.loginemployee(loginEmployee).subscribe(
      employee => {
        debugger;
        var succ = employee;
        var token = employee.success.token;
        if(succ){
        this.loginForm.reset();
        // localStorage.setItem("LoggedInUser", JSON.stringify(succ.token));
        localStorage.setItem("LoggedInUser", token);
        this.router.navigate(['dashboard']);
        } else {
          this.Error = true;
          this.massage = "User ID/Password Wrong";
        }
      }
    )
  }
}