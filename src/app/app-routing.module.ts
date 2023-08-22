import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { myGuard } from './Services/my.guard';
import { TaskTemplateComponent } from './task-template/task-template.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumsTemplateComponent } from './albums-template/albums-template.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './product-list/create-product/create-product.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'tasks', component: TaskTemplateComponent, children: [

      { path: '', component: TaskListComponent },
      { path: 'create', component: CreateTaskComponent },
      { path: 'home', component: HelloWorldComponent, canActivate: [myGuard] }


    ]
  },
  { path: 'tasklist', redirectTo: 'tasks' },
  {
    path: 'albums', component: AlbumsTemplateComponent, children: [
      { path: '', component: AlbumsComponent },
      { path: 'details/:id', component: AlbumDetailComponent }

    ]
  },

  {
    path: 'products', children: [
      { path: '', component: ProductListComponent },
      { path: 'create', component: CreateProductComponent }
    ]
  },
  { path: 'template', component: TemplateformComponent },
  { path: 'react', component: ReactFormComponent },
  { path: 'pipes/:id/:id2', component: PipesDemoComponent },
  { path: '**', component: NotFoundComponent },










];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
