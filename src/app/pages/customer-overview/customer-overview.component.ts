import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CustomerService } from '../../services/customer.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-overview',
  standalone: true,
  imports: [RouterModule,FormsModule, MatFormFieldModule,
    MatSelectModule, MatInputModule, MatIconModule, MatButtonModule, MatTableModule,
    MatPaginatorModule],
  templateUrl: './customer-overview.component.html',
  styleUrl: './customer-overview.component.css'
})

export class CustomerOverviewComponent implements OnInit {

  dataSource: any[] = [];
  allCustomers: any[] = [];

  searchType: string = '';
  searchText: string = '';

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {

    // Data ஒரே தடவை load ஆகும்
    this.customerService.getCustomers().subscribe({
      next: (data) => {
        this.allCustomers = data;
        this.dataSource = data;
      },
      error: (err) => {
        console.error(err);
      }
    });

  }

  displayedColumns: string[] = [
    'customerName',
    'mobileNumber',
    'email',
    'city',
    'state'
  ];

  searchCustomers() {
     console.log("button clicked");
    if (this.searchType === 'customer_name') {

      this.dataSource = this.allCustomers.filter(x =>
        x.customer_name
          .toLowerCase()
          .includes(this.searchText.toLowerCase())
      );

    }
    else if (this.searchType === 'mobile_no') {

      this.dataSource = this.allCustomers.filter(x =>
        x.mobile_no.includes(this.searchText)
      );

    }
    else {

      this.dataSource = this.allCustomers;

    }

  }

}