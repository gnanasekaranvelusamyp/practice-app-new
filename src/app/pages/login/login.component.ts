import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private router: Router, private http: HttpClient) { }

  login() {
    const data = {
      username: this.username,
      password: this.password
    };

    this.http.post('https://backend-code-maintain.onrender.com/api/login', data)
      .subscribe({
        next: (res: any) => {
          console.log(res);

          if (res && (res.token || res.message)) {
            alert('Login Success ✅');
            this.router.navigate(['/home']);
          } else {
            alert('Invalid Credentials ❌');
          }
        },
        error: (err) => {
          console.log(err);
          alert('Login Failed ❌');
        }
      });
  }
}