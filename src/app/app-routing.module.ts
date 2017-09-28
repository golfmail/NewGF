import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Kb021Component } from './kb02/kb02-1/kb02-1.component';
import { Kb023Component } from './kb02/kb02-3/kb02-3.component';

const routes: Routes = [
    {
        path: 'kb021',
        component: Kb021Component
    },
    {
        path: 'kb021/:id',
        component: Kb021Component
    },
    {
        path: 'Kb023',
        component: Kb023Component
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
