import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { error } from 'console';

@Component({
  selector: 'app-login',
  imports: [FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   loginObj: any ={
    email : "",
    password : ""
   }

   router =inject(Router)
   http = inject(HttpClient)

   onLogin = () => {
    this.http.post('https://dev-api.wanasti.com/api/v1/user/login?lang=en&currencyCode=KWD',{Headers : new HttpHeaders({
      "Auth" :" dAwMpo/TAWLhFrwwr3Wzcmc8XTdmAgp6zmGLsFmJ9HAnEbTQAg937i/hqKFjtFVQ4TnQ2y6xlVSeTKy3VWcxvalwvmPq6qF7+UcLd3wBXYoVQ2Puj49mTweKh/v2Rvj9zyVjfbexFkjMNZ5XyGucmdOI6XMmI98Zvu38Jh1fOo8157YxlgCozKkonixczjGIn3RKLuv7v3gXDRl4irzRcS6lYKGJB8vfA847GUppsVjdZV9bAjADfqUP2Iyl6Nz8MOWrSHNy8tWqhM6mI165rCwH3xMv7HEexmsMO7Mi36c=s"
    })},this.loginObj).subscribe((res:any) => {
      this.router.navigate(['userpage'])
    },
    (error) => {
      console.log(error)
    })
   }
}
