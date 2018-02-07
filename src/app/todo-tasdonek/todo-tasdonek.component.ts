import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-tasdonek',
  templateUrl: './todo-tasdonek.component.html',
  styleUrls: ['./todo-tasdonek.component.css']
})
export class TodoTasdonekComponent implements OnInit {

  @Input()
  tasksDone = [];

  constructor() { }

  ngOnInit() {
  }

}
