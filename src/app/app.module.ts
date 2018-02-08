import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { TodoTasdonekComponent } from './todo-tasdonek/todo-tasdonek.component';
import { TasksService } from './services/tasks.service';
import { CheckedDirective } from './shared/checked.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TodoTaskComponent,
    TodoTasdonekComponent,
    CheckedDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
