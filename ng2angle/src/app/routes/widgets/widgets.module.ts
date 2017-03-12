import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeModule } from 'angular2-tree-component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { SelectModule } from 'ng2-select';

import { SharedModule } from '../../shared/shared.module';

import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  { path: 'todolist', component: TodolistComponent },
];

@NgModule({
  imports: [
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
  ],
  exports: [
    RouterModule
  ]
})
export class WidgetsModule { }
