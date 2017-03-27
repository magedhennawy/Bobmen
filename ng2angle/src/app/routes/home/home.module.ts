import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TreeModule } from 'angular2-tree-component';
import { SelectModule } from 'ng2-select';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home/home.component';
import { WeatherComponent } from '../widgets/weather/weather.component';
import { TodolistComponent } from '../widgets/todolist/todolist.component';
import { TwitterComponent } from '../widgets/twitter/twitter.component';
import { GoogleComponent } from '../widgets/google/google.component';
import { PasswordSaverComponent } from '../widgets/passwordSaver/passwordsaver.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
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
      HomeComponent,
      WeatherComponent,
      TodolistComponent,
      TwitterComponent,
      GoogleComponent,
      PasswordSaverComponent
    ],
    exports: [
        RouterModule,
        HomeComponent,
        WeatherComponent,
        TodolistComponent,
        TwitterComponent,
        GoogleComponent,
        PasswordSaverComponent
    ]
})
export class HomeModule { }
