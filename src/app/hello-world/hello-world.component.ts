import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {

  welcomeMsg = 'Welcome to my app';

  @Input() count: number = 10;
  @Output() countChange = new EventEmitter<number>();

  color = 'green';

  emplyees = ['Atallah', 'Mahdi', 'Shireen', 'Hamza'];

  myName!: string;


  constructor() {

    this.myName = 'Atallah Esaied';


  }


  incremnet() {
    this.count++;

    this.countChange.emit(this.count);
  }


}
