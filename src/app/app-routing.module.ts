import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: 'template', component: TemplateformComponent },
  { path: 'react', component: ReactFormComponent },
  { path: 'pipes/:id', component: PipesDemoComponent },
  { path: '**', component: NotFoundComponent },










];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
