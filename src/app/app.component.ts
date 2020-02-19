import { Component } from '@angular/core';
import { Employee } from './Model/employee';
import { PostEmployeeService } from './Service/post-employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Applicationform';

  employeeModel=  new Employee("rob","sharma","abc@gmail.com",1234567890,"s3data")

  constructor(private postservice:PostEmployeeService){}
  onSubmit(){

    this.postservice.postEmployee(this.employeeModel).subscribe(

      data=>console.log("success"),
      error=>console.log("error")
    )

  }


}
