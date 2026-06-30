import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  name: string = '';
  salary: number = 0;

  constructor(private http: HttpClient){

  }

  save() {

    let employeeData = {
      name: this.name,
      payment: this.salary
    };


    this.http.post('https://backend-code-maintain.onrender.com/api/Employee/Post', employeeData)
      .subscribe(res => {
        console.log(res);
        alert("saved successfully");
      });

      
  }
}
