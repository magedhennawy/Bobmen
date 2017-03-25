import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeModule } from 'angular2-tree-component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { SelectModule } from 'ng2-select';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SharedModule } from '../../shared/shared.module';

import { TodolistComponent } from './todolist/todolist.component';
import { WeatherComponent } from './weather/weather.component';
import { TwitterComponent } from './twitter/twitter.component';
import { GoogleComponent } from './google/google.component';


const routes: Routes = [
  { path: 'todolist', component: TodolistComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'twitter', component: TwitterComponent},
  { path: 'google', component: GoogleComponent},
];

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    SharedModule,
    RouterModule.forChild(routes),
    TreeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAkTtKHFYt90AySpSuGXN0ODvOBHNBm0gw'
    }),
    SelectModule
  ],
  declarations: [
    TodolistComponent,
    WeatherComponent,
    TwitterComponent,
    GoogleComponent
  ],
  exports: [
    RouterModule
  ]
})
export class WidgetsModule { }
