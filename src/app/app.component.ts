import { Component } from '@angular/core';
// import { randomBytes } from 'crypto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  n1 = null;
  n2 = null;
  n3 = null;
  image = "<img src='../assets/spiderman.png' height= '512px' width= '512px'>";
  rob = "<img src='../assets/rob.jpg'>"
descendingnumber(){
  let numbers = [this.n1, this.n2, this.n3];
  console.log('DESCENDING');
  numbers.sort((a,b) => 0 - (a > b ? 1 : -1));
  console.log(numbers);
  document.getElementById('p1').innerHTML = numbers[0].toString();
  document.getElementById('p2').innerHTML = numbers[1].toString();
  document.getElementById('p3').innerHTML = numbers[2].toString();
  document.getElementById('p4').innerHTML = this.rob;
}

arrangenumbers(){
  console.log("x");
  let n = 2;
  let numbers = [this.n1,this.n2,this.n3];
  
  numbers.sort((a,b) => 0 - (a > b ? -1 : 1));

  console.log('works');
  console.log(numbers);
  
  document.getElementById('p1').innerHTML = numbers[0].toString();
  document.getElementById('p2').innerHTML = numbers[1].toString();
  document.getElementById('p3').innerHTML = numbers[2].toString();
  document.getElementById('p4').innerHTML = this.image;
 }

};
