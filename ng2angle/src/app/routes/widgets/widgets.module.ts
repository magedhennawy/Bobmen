import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeModule } from 'angular2-tree-component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { SelectModule } from 'ng2-select';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../../shared/shared.module';

import { CodeeditorComponent } from './codeeditor/codeeditor.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: 'codeeditor', component: CodeeditorComponent },
  { path: 'calendar', component: CalendarComponent },
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
    CodeeditorComponent,
    CalendarComponent
  ],
  exports: [
    RouterModule
  ],
})
export class WidgetsModule { }
