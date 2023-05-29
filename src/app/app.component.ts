import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-calculator';


  // zeroTo9Numbers =  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // storeNumberForCalculation : number[] = [];

  // constructor(){

  // }

  // public storeNumber(val:number){

  //   let newVal = this.storeNumberForCalculation[this.storeNumberForCalculation.length-1] * 10 + val;
  //   this.storeNumberForCalculation.push(val);
  // }

  display: string = '0';
  result: number = 0;
  num1: number = 0;

  appendNumber(number: number) {
    if(this.display == '0'){
      this.display = '';
    }
    this.display += number.toString();
    this.onChange(Number(this.display));
  }

  clear() {
    this.display = '0';
    this.num1 = 0;
    this.result = 0;
  }

  onAddButtonClick(){
    this.result = 0;
    this.result = this.num1;
    this.display = '0';
  }

  onEnterButton(){
    this.result += Number(this.display);
    this.num1 = this.result;
  }

  onChange(val:number){
    this.num1 = val;
  }

  getResult(){
    return this.result;
  }
}
