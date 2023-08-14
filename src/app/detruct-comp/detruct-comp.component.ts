import { Component } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-detruct-comp',
  templateUrl: './detruct-comp.component.html',
  styleUrls: ['./detruct-comp.component.css']
})
export class DetructCompComponent {


  getValues(): string[] {

    var names = ['Atallah', 'Ahmad', 'Talal']

    var newName = ['Mahdi', ...names];

    var rect = { x: 10, y: 30, width: 15, height: 25 };

    var { y, x } = rect;
    // for (var name of names) {
    //   newName.push(name);
    // }



    var tasks: Task[];

    var taskDict: { [name: number]: any } = {};

    taskDict[1] = new Task();
    taskDict[20] = new Task();
    taskDict[30] = new Task();




    return newName;
  }

}
