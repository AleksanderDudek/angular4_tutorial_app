import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-todo-tasdonek',
  templateUrl: './todo-tasdonek.component.html',
  styleUrls: ['./todo-tasdonek.component.css']
})
export class TodoTasdonekComponent implements OnInit {


  tasksDone: Array<Task> = [];

  constructor(private tasksTaskService: TasksService) {
    this.tasksTaskService.getTasksListObs().subscribe(tasks => {
      this.tasksDone = tasks.filter(t => t.isDone === true);
    });
   }

  ngOnInit() {
  }

}
