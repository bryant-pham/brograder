/*
 * These are globally available services in any component or any other service
 */

// Angular 2
import { FORM_PROVIDERS, HashLocationStrategy, LocationStrategy } from '@angular/common';
// Angular 2 Http
import { HTTP_PROVIDERS } from '@angular/http';

// Angular 2 Material
// TODO(gdi2290): replace with @angular2-material/all
import { MATERIAL_PROVIDERS } from './angular2-material2';

import { SERVICE_PROVIDERS } from '../../app/shared/services';
import { BrograderServiceUriBuilder } from '../../app/shared/uribuilder/brograderService.uribuilder';

/*
* Application Providers/Directives/Pipes
* providers/directives/pipes that only live in our browser environment
*/
export const APPLICATION_PROVIDERS = [
  ...FORM_PROVIDERS,
  ...HTTP_PROVIDERS,
  ...MATERIAL_PROVIDERS,
  {provide: LocationStrategy, useClass: HashLocationStrategy },
  BrograderServiceUriBuilder,
  ...SERVICE_PROVIDERS
];

export const PROVIDERS = [
  ...APPLICATION_PROVIDERS
];
