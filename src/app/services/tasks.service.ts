import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Task } from '../models/task';

@Injectable()
export class TasksService {
  tasksList: Array<Task> = [];
  tasksDone: Array<Task> = [];

  private tasksListObs = new BehaviorSubject<Array<Task>>(this.tasksList);
  private tasksDoneObs = new BehaviorSubject<Array<Task>>(this.tasksDone);

  constructor() {
    this.tasksList = [
      {name: 'Sprzatanie kuwety',
       created: new Date },
       {name: 'Bla kuwety',
       created: new Date },
       {name: 'Angular kuwety',
       created: new Date }];
    this.tasksListObs.next(this.tasksList);

  }

  add(task: Task) {
    this.tasksList.push(task);
    this.tasksListObs.next(this.tasksList);
  }

  remove(task: Task) {
    this.tasksList = this.tasksList.filter( e => e !==task);
    this.tasksListObs.next(this.tasksList);

  }

  done(task: Task) {
    this.tasksDone.push(task);
    this.tasksList = this.tasksList.filter( e => e !==task);
    this.tasksListObs.next(this.tasksList);
    this.tasksDoneObs.next(this.tasksDone);

  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }

  getTasksDoneObs(): Observable<Array<Task>> {
    return this.tasksDoneObs.asObservable();
  }
}
