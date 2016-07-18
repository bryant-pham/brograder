// For vendors for example jQuery, Lodash, angular2-jwt just import them here unless you plan on
// chunking vendors files for async loading. You would need to import the async loaded vendors
// at the entry point of the async loaded file. Also see custom-typings.d.ts as you also need to
// run `typings install x` where `x` is your module

// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';

// RxJS
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/first';

// Angular 2 Material 2
import '@angular2-material/button';
import '@angular2-material/card';
import '@angular2-material/checkbox';
import '@angular2-material/sidenav';
import '@angular2-material/input';
import '@angular2-material/list';
import '@angular2-material/radio';
import '@angular2-material/progress-bar';
import '@angular2-material/progress-circle';
import '@angular2-material/toolbar';
import '@angular2-material/grid-list';
// look in src/platform/angular2-material2 and src/platform/providers

// Material Design Lite
import 'material-design-lite/material.min.js';
import 'material-design-lite/material.min.css';
import 'mdl-selectfield/dist/mdl-selectfield.min.js';
import 'mdl-selectfield/dist/mdl-selectfield.min.css';

import 'jquery/dist/jquery.min.js';
import '@ngrx/store';
import 'immutable/dist/immutable.min.js';

if ('production' === ENV) {
  // Production


} else {
  // Development

}
