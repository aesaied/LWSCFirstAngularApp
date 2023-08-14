import { Component } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  taskList: Task[] = [];


  addTask(task: Task) {
    this.taskList.push(task);
  }

  deleteTask(task: Task) {


    if (confirm('Are you sure?')) {
      this.taskList = this.taskList.filter((val) => val != task);

    }
  }

}
