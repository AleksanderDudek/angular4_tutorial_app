import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-todo-tasdonek',
  templateUrl: './todo-tasdonek.component.html',
  styleUrls: ['./todo-tasdonek.component.css']
})
export class TodoTasdonekComponent implements OnInit {


  tasksDone = [];

  constructor(private tasksTaskService: TasksService) {
    this.tasksTaskService.getTasksDoneObs().subscribe(tasks => {
      this.tasksDone = tasks;
    });
   }

  ngOnInit() {
  }

}
