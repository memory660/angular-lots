import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { PLUGIN_TOKEN } from './plugins/tokens/plugin.token';
import { Plugin1 } from './plugins/class/plugin1';
import { Plugin2 } from './plugins/class/plugin2';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: PLUGIN_TOKEN,
      multi: true,
      useClass: Plugin1,
    },
    {
      provide: PLUGIN_TOKEN,
      multi: true,
      useClass: Plugin2,
    },
  ]
};
