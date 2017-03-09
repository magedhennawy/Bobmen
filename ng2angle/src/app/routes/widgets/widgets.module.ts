import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { SharedModule } from '../../shared/shared.module';
import { WidgetsComponent } from './widgets/widgets.component';

const routes: Routes = [
    { path: '', component: WidgetsComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAkTtKHFYt90AySpSuGXN0ODvOBHNBm0gw'
        })
    ],
    declarations: [WidgetsComponent],
    exports: [
        RouterModule
    ]
})
export class WidgetsModule { }
