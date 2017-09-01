import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// import { bootstrap } from '@angular/platform-browser-dynamic';

// import { Kb021Component } from './app/kb02/kb02-1/kb02-1.component';




if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
// platformBrowserDynamic().bootstrapModule(Kb021Component);
