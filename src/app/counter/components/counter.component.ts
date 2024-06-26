import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{ counter }}</h3>
  <button (click)="sum(1)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="res(1)">-1</button>
  `
})

export class counterComponent implements OnInit {
  public counter: number = 10;

  constructor() { }

  sum( value: number ): void {
    this.counter += value;
  }

  res( value: number ): void {
    this.counter -= value;
  }

  reset(){
    this.counter = 10;
  }
  ngOnInit() { }
}
