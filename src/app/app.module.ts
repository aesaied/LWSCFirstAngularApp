import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { DetructCompComponent } from './detruct-comp/detruct-comp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    TaskListComponent,
    CreateTaskComponent,
    DetructCompComponent,
    TemplateformComponent,
    ReactFormComponent,
    ErrorMsgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
