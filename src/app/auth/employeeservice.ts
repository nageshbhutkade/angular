import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from './employee';
import { Loginemployee } from './login/loginemployee';


@Injectable({
  providedIn: 'root'
})
export class EmplyeeserviceService {
url='http://localhost:8000/'
  constructor(private http:HttpClient) { }
  createemployee(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.url+'api/register',employee)
  }

  loginemployee(loginEmployee: Loginemployee): Observable<any> {
    return this.http.post<any>(this.url + 'api/login', loginEmployee)
  }
}