import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css'],
  //to powoduje, ze style komponentu sa
  encapsulation: ViewEncapsulation.Emulated
})
export class TodoTaskComponent implements OnInit {

tasksList: Array<Task> = [];


  constructor(private tasksTaskService: TasksService) {
    this.tasksTaskService.getTasksListObs().subscribe(
      (tasks: Array<Task>) => {
      this.tasksList = tasks.filter(t => t.isDone === false);
    });
  }

  ngOnInit() {
  }

  remove(task: Task) {
    this.tasksTaskService.remove(task);
  }

  done(task: Task) {
    task.end = new Date().toLocaleString();
    this.tasksTaskService.done(task);

  }

  getColor(): string {
      return this.tasksList.length >= 5 ? 'red' : 'green';
  }

  save() {
    this.tasksTaskService.saveTasksInDb();
  }
}
