import { Injector, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {environment} from './environments/environment';

import { UIRouter, UrlService } from '@uirouter/core';
import {JenkinsAngularApp} from './app/app.angular.module';

import './app/configs';
import './app/controllers';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(JenkinsAngularApp).then(platformRef => {
    const injector: Injector = platformRef.injector;

    // Intialize the Angular Module (get() any UIRouter service from DI to initialize it)
    const url: UrlService = injector.get(UIRouter).urlService;

    // Instruct UIRouter to listen to URL changes
    url.listen();
    url.sync();
});
