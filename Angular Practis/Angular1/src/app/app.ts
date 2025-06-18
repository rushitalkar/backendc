import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,Login ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Angular1';
  


  counter: number = 0

  increment() {
    this.counter++;
  }

  decrement() {

if (this.counter > 0){ 
  this.counter--;
}
else{
  this.counter = 0
}

    

  }

  reset() {
    this.counter = 0;
  }


  name = '';
  names= (event:Event)=>{
      this.name = (event.target as HTMLInputElement).value
  }


  getname= ""
  getvalue(){
    this.getname = this.name
  }
}
