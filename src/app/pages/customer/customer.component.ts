import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  constructor(private http: HttpClient) { }

  customerData = {
    customer_name: '',
    mobile_no: '',
    email: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  };

  saveCustomer() {

    const apiUrl = 'https://backend-code-maintain.onrender.com/api/customer';

    this.http.post(apiUrl, this.customerData)
      .subscribe({
        next: (res) => {
          alert('Customer Saved Successfully');

          this.customerData = {
            customer_name: '',
            mobile_no: '',
            email: '',
            address: '',
            city: '',
            state: '',
            pincode: ''
          };
        },

        error: (err) => {
          console.log(err);
          alert('Error while saving customer');
        }
      });

  }

}