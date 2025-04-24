import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { TemplateComponent } from './template/template.component';
import { provideGithubPagesDemo } from '@christophhu/ngx-github-pages-demo';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideGithubPagesDemo({ username: 'christophhu', repository: 'ngx-dark-mode', version: '19.2.11', token: null, template: TemplateComponent }),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes)
  ]
};
