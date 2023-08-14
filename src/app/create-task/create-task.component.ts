import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  currentTask!: Task

  @Output() taskCreated = new EventEmitter<Task>();



  createTask(title: string, description: string, isImportant: boolean): void {

    this.currentTask = { title: title, description: description, isImportant: isImportant };

    this.taskCreated.emit(this.currentTask);
  }

}
