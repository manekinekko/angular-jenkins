import { JenkinsApp } from './app/app.angularjs.module';
import { Injector, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {environment} from './environments/environment';

import { UpgradeModule } from '@angular/upgrade/static';
import { UIRouter, UrlService } from '@uirouter/core';
import {JenkinsAngularApp} from './app/app.angular.module';

import {UIStatePostRegister} from './__UIStatePostRegister';

import './app/configs';
import './app/controllers';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(JenkinsAngularApp).then(platformRef => {
  const injector = platformRef.injector;
  const upgrade = injector.get(UpgradeModule) as UpgradeModule;

  // The DOM must be already be available
  upgrade.bootstrap(document.body, [JenkinsApp.name], {strictDi: true});

  // Intialize the Angular Module (get() any UIRouter service from DI to initialize it)
  const url: UrlService = injector.get(UrlService);

  UIStatePostRegister(platformRef);

  // Instruct UIRouter to listen to URL changes
  url.listen();
  url.sync();

});
