import { LauncherComponent } from './launcher/launcher.component';
import { HomeComponent } from './home/home.component';
import { Kb02Component } from './kb02/kb02.component';
import { LogReportComponent } from './log-report/log-report.component';
import { ReportReportComponent } from './report-report/report-report.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Kb021Component } from './kb02/kb02-1/kb02-1.component';
import { Kb023Component } from './kb02/kb02-3/kb02-3.component';
import { MenuReportComponent } from 'app/menu-report/menu-report.component';
import { MenuReportZzpmtComponent } from 'app/menu-report-zzpmt/menu-report-zzpmt.component';
import { SaveListsComponent } from 'app/save-lists/save-lists.component';
import { Kb02ReportComponent } from 'app/kb02/kb02-report/kb02-report.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/lch/menu', pathMatch: 'full'
  },

  {
      path: 'report',
      component: ReportReportComponent
  },
  {
      path: 'logreport',
      component: LogReportComponent
  },
  {
    path: 'menureport',
    component: MenuReportComponent
  },
  {
    path: 'menureport-zzpmt',
    component: MenuReportZzpmtComponent
  },
  {
    path: 'lch',
    component: LauncherComponent,
    children: [
      {
        path: '',
        redirectTo: '/lch/menu', pathMatch: 'full'
      },
      {
        path: 'menu',
        component: SaveListsComponent,
        // outlet: 'menu'
      },
      {
        path: 'kb02',
        component: Kb02Component,
        children: [
          {
            path: '',
            redirectTo: '/lch/kb02/(aux:kb021)', pathMatch: 'full'
          },
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
        path: 'kb02report',
        component: Kb02ReportComponent,
      },
    ]
  }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
