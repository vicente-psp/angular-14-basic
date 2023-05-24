import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example03-event-binding',
  templateUrl: './example03-event-binding.component.html',
  styleUrls: ['./example03-event-binding.component.sass']
})
export class Example03EventBindingComponent implements OnInit {

  texto = '';

  constructor() { }

  ngOnInit(): void {
  }

  button1() {
    console.log('button1');
  }

  button2() {
    console.log('button2');
  }

  button3() {
    console.log('button3');
  }

  focus1() {
    console.log('focus1');
  }

  mouseover1() {
    console.log('mouseover1');
  }

  keyupEvent(event: any) {
    // console.log('event => ', event.srcElement.value);
    this.texto = event.srcElement.value
  }

}
