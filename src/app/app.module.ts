import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { TodoTasdonekComponent } from './todo-tasdonek/todo-tasdonek.component';
import { TasksService } from './services/tasks.service';
import { CheckedDirective } from './shared/checked.directive';
import { DateDirective } from './shared/date.directive';
import { TransformTaskPipe } from './shared/transform-task.pipe';
import { SortNamePipe } from './shared/sort-name.pipe';
import { HttpService } from './services/http.service';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app.routing.model';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCIl8_mZ9e76c5e2gaFFPdLKYUc0Uc0crI',
  authDomain: 'auth-a3b8a.firebaseapp.com',
  databaseURL: 'https://auth-a3b8a.firebaseio.com',
  projectId: 'auth-a3b8a',
  storageBucket: 'auth-a3b8a.appspot.com',
  messagingSenderId: '954619924604'
};

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TodoTaskComponent,
    TodoTasdonekComponent,
    CheckedDirective,
    DateDirective,
    TransformTaskPipe,
    SortNamePipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [TasksService, HttpService, AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
