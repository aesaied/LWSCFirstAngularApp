/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import "jquery";

import 'sweetalert2'

import '@angular/localize';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
