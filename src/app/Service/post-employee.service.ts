import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../Model/employee';

@Injectable({
  providedIn: 'root'
})
export class PostEmployeeService {

  url='https://9uj39h0rvf.execute-api.us-east-1.amazonaws.com/QA';
  
  constructor(private http:HttpClient){ }
  
  postEmployee(emp:Employee){

    return this.http.post(this.url,emp)
  }
}
