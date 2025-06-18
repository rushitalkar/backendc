import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserpageComponent } from '../userpage/userpage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { 
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [  RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularform';
  
}
