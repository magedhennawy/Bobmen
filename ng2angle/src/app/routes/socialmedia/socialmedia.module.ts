import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeModule } from 'angular2-tree-component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { SelectModule } from 'ng2-select';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SharedModule } from '../../shared/shared.module';

import { TwitterComponent } from './twitter/twitter.component';


const routes: Routes = [
  { path: 'twitter', component: TwitterComponent},
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
    TwitterComponent,
  ],
  exports: [
    RouterModule
  ]
})
export class socialmediaModule { }
