import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})

export class SalesComponent implements OnInit {

  customer = '';
  orderNo = '';

  selectedPartNo = '';
  partName = '';
  price = 0;
  qty = 0;

  customerList: any[] = [];
  partList: any[] = [];

  salesList: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.loadCustomers();
    this.loadProducts();

  }

  // CUSTOMER API
  loadCustomers() {

    this.http.get<any[]>(
      'https://backend-code-maintain.onrender.com/api/Customer/GetCustomer'

    ).subscribe({

      next: (data) => {

        this.customerList = data;

      }

    });

  }

  // PRODUCT API
  loadProducts() {

    this.http.get<any[]>(
      'https://backend-code-maintain.onrender.com/api/Product/GetProduct'
    ).subscribe({

      next: (data) => {

        this.partList = data;

      }

    });

  }

  // PART DETAILS
  getPartDetails() {

    let product = this.partList.find
      (
        x => x.part_No == this.selectedPartNo
      );

    if (product) {

      this.partName = product.part_Name;
      this.price = product.price;

    }

  }

  // ADD GRID ROW
  addRow() {

    let amount = this.price * this.qty;

    this.salesList.push({

      partNo: this.selectedPartNo,
      partName: this.partName,
      price: this.price,
      qty: this.qty,
      amount: amount

    });

    // clear
    this.selectedPartNo = '';
    this.partName = '';
    this.price = 0;
    this.qty = 0;

  }

}