import { LauncherComponent } from './launcher/launcher.component';
import { HomeComponent } from './home/home.component';
import { Kb02Component } from './kb02/kb02.component';
import { LogReportComponent } from './log-report/log-report.component';
import { ReportReportComponent } from './report-report/report-report.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Kb021Component } from './kb02/kb02-1/kb02-1.component';
import { Kb023Component } from './kb02/kb02-3/kb02-3.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/kb02', pathMatch: 'full'
  },
    {
      path: 'kb02',
      component: Kb02Component,
      children: [
        {
          path: 'kb021',
          component: Kb021Component,
          outlet: 'aux'
        },
        {
          path: 'kb021/:id',
          component: Kb021Component,
          outlet: 'aux'
        },
        {
          path: 'Kb023',
          component: Kb023Component,
          outlet: 'aux'
        },
      ]
    },

    {
        path: 'report',
        component: ReportReportComponent
    },
    {
        path: 'logreport',
        component: LogReportComponent
    },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
