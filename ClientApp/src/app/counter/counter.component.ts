import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}
export class FbCounterComponent {
  public currentFbCount = 1;

  public incrementFbCounter() {
    var looping = function (n) {
      var a = 0, b = 1, f = 1;
      for (var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
      }
      return f;
    };
  }
}


/**import { Component, OnInit} from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {
  numbers = [0, 1];
  currentNumber = 0;
  nextNumber = 0;

  constructor() { }
  

  ngOnInit() {
    public increment(): void {
    this.currentNumber = this.numbers.length - 1;

    this.nextNumber =
      this.numbers[this.currentNumber] + this.numbers[this.currentNumber - 1];
    this.numbers.push(this.nextNumber);

    this.numbers = this.fibonacci(this.currentNumber);
  }

  fibonacci(n) {
    return [...Array(n)].reduce(
      (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
      []
    );
  }
  }

}
*/
