import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
     productData = {
    part_No: '',
    part_Name: '',
    uom: '',
    hsn_Code: ''
  };

  constructor(private http: HttpClient)
  {

  }

  saveProduct()
  {
    const apiUrl =
      'https://backend-code-maintain.onrender.com/api/Product';

      

    this.http.post(apiUrl, this.productData)
      .subscribe({

        next: (res) =>
        {
          alert('Saved Successfully');

          this.productData = {
            part_No: '',
            part_Name: '',
            uom: '',
            hsn_Code: ''
          };
        },

        error: (err) =>
        {
          console.log(err);
          alert('Error');
        }

      });
  }
}
