import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = 'https://backend-code-maintain.onrender.com/api/Customer/GetCustomer';

  constructor(private http: HttpClient) { }

  getCustomers() {
    return this.http.get<any[]>(this.apiUrl);
  }
}
