import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {environment} from './environments/environment';
import {PybMpStatusModule} from './status/pyb-mp-status.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(PybMpStatusModule)
  .catch(err => console.error(err));
