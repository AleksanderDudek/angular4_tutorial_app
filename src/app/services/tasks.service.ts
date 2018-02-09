import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Task } from '../models/task';
import { HttpService } from './http.service';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';

@Injectable()
export class TasksService {

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);

  constructor(private httpService: HttpService) {
    // const tasksList = [
    //   ];

    // this.tasksListObs.next(tasksList);
    this.httpService.getTasks().subscribe( list => {
      this.tasksListObs.next(list);
    });
  }

  add(task: Task) {
    const list = this.tasksListObs.getValue();
    list.push(task);

    this.tasksListObs.next(list);
  }

  remove(task: Task) {
    const list = this.tasksListObs.getValue().filter(t => t !== task);
    this.tasksListObs.next(list);

  }

  done(task: Task) {
    task.end = new Date().toLocaleString();
    task.isDone = true;
    // this.tasksDone.push(task);
    // this.tasksList = this.tasksList.filter( e => e !==task);
     const list = this.tasksListObs.getValue();
     this.tasksListObs.next(list);
    // this.tasksDoneObs.next(this.tasksDone);

  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }

  saveTasksInDb() {
    this.httpService.saveTasks(this.tasksListObs.getValue());
  }
}
