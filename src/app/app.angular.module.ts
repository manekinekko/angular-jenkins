import * as angular from 'angular';
import {NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader} from '@angular/core';
import {UpgradeModule, setAngularLib} from '@angular/upgrade/static';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {UIRouterModule} from '@uirouter/angular';
import {UIRouterUpgradeModule} from '@uirouter/angular-hybrid';

// Modules AngularJS
import {JenkinsApp} from './app.angularjs.module';

// Module Angular 5
import {RisquesModule} from './components/risques/risques.module';

setAngularLib(angular);

// The main NgModule for the Angular portion of the hybrid app
@NgModule({
    imports: [
        BrowserModule,
        // Provide angular upgrade capabilities
        UpgradeModule,
        // Provides the @uirouter/angular-hybrid directives
        UIRouterUpgradeModule,
        // Provides the @uirouter/angular directives
        UIRouterModule,
        NgbModule.forRoot(),

        // Modules GAMMA
        RisquesModule,
    ],
    declarations: [],
    entryComponents: [],
    providers: [
        // Provide the SystemJsNgModuleLoader when using Angular lazy loading
        {provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader},
    ]
})
export class JenkinsAngularApp {
    constructor(private upgrade: UpgradeModule) {
    }

    ngDoBootstrap() {
        this.upgrade.bootstrap(document.body, [JenkinsApp.name], {strictDi: true});
    }
}