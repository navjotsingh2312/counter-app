import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string= 'counter-app';
  counter:number=0;
  handleIncrease=()=>{
    this.counter=this.counter+1;
    if(this.counter>10)
    {
      
      this.counter=10;
    }
    
  }
  handleDecrease=()=>{
    this.counter=this.counter-1;
    if(this.counter<0)
    {
      this.counter=0;
    }
  }
  handleReset(){
    this.counter=0;
  }
}
