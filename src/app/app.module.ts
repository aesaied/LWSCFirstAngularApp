import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
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
import { PasswordStrengthDirective } from './shared/password-strength.directive';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { ExponentialStrengthPipe } from './shared/exponential-strength.pipe';
import { UserService } from './Services/user.service';
import { IUserService } from './Services/iuser.service';
import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TaskTemplateComponent } from './task-template/task-template.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumsTemplateComponent } from './albums-template/albums-template.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './product-list/create-product/create-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    TaskListComponent,
    CreateTaskComponent,
    DetructCompComponent,
    TemplateformComponent,
    ReactFormComponent,
    ErrorMsgComponent,
    PasswordStrengthDirective,
    PipesDemoComponent,
    ExponentialStrengthPipe,
    HomeComponent,
    NotFoundComponent,
    TaskTemplateComponent,
    AlbumsComponent,
    AlbumDetailComponent,
    AlbumsTemplateComponent,
    ProductListComponent,
    CreateProductComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ provide: IUserService, useClass: UserService },

  { provide: 'USERSERVICE', useExisting: IUserService },
  { provide: 'API_URL', useValue: 'https://jsonplaceholder.typicode.com/' },
  { provide: 'PROD_API_URL', useValue: 'https://localhost:7259/api/' }


    , { provide: DEFAULT_CURRENCY_CODE, useValue: 'ILS' },



  { provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: { dateFormat: 'dd/MM/yyyy' } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
