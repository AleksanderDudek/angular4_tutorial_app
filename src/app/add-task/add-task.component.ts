import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';
import { FormGroup, FormArray } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  addForm: FormGroup;


  constructor(private taskService: TasksService, private authService: AuthService) {

  }

  ngOnInit() {
    this.addForm = this.initForm();
  }

  initForm() {
    return new FormGroup({
      taskName: new FormArray([new FormControl(null, Validators.required)])
    });
  }

  add() {

    const tasksList = this.createTaskList();
    this.taskService.add(tasksList);
    this.addForm = this.initForm();
  }

  createTaskList(): Array<Task> {


    const tasksList = new Array<Task>();
    const tasksArray = <[string]>this.addForm.get('taskName').value;

    tasksArray.forEach(
      taskName => {
        const task = {
          name: taskName,
          userId: this.authService.user.uid,
          created: new Date().toLocaleString(),
          isDone: false
        };
        tasksList.push(task);
      });
      return tasksList;
  }




  addField() {
    const arr = <FormArray>this.addForm.get('taskName');
    arr.push(new FormControl(null, Validators.required));
  }
}
