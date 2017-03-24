import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TreeModule } from 'angular2-tree-component';
import { SelectModule } from 'ng2-select';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WeatherComponent } from '../widgets/weather/weather.component';
import { TodolistComponent } from '../widgets/todolist/todolist.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
];

@NgModule({
    imports: [
      SharedModule,
      RouterModule.forChild(routes),
      TreeModule,
      SelectModule
    ],
    declarations: [
      HomeComponent,
      WeatherComponent,
      TodolistComponent,
    ],
    exports: [
        RouterModule,
        HomeComponent,
        WeatherComponent,
        TodolistComponent,
    ]
})
export class HomeModule { }
