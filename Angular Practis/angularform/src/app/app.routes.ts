import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserpageComponent } from '../userpage/userpage.component';


export const routes:Routes= [

{
    path : "",
    redirectTo : "login",
    pathMatch : "full"

},
{
    path :"login",
    component : LoginComponent,
    
},
 {
    path : "userpage"
    ,component : UserpageComponent
 }
]