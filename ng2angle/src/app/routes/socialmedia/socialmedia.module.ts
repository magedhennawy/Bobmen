import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeModule } from 'angular2-tree-component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { SelectModule } from 'ng2-select';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SharedModule } from '../../shared/shared.module';

import { TwitterComponent } from './twitter/twitter.component';
import { GoogleComponent } from './google/google.component';
import { FacebookComponent } from './facebook/facebook.component';


const routes: Routes = [
  { path: 'twitter', component: TwitterComponent},
  { path: 'google', component: GoogleComponent},
  { path: 'facebook', component: FacebookComponent},
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
    GoogleComponent,
    FacebookComponent
  ],
  exports: [
    RouterModule
  ]
})
export class socialmediaModule { }
