import { EvaluationsDetailsComponent } from './components/risques/evaluations/evaluations-details/evaluations-details.component';
import * as angular from 'angular';
import {NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UpgradeModule, setAngularLib} from '@angular/upgrade/static';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { Visualizer } from '@uirouter/visualizer';
import {UIRouter, UIRouterModule} from '@uirouter/angular';
import {trace} from '@uirouter/core';
import {UIRouterUpgradeModule} from '@uirouter/angular-hybrid';

// Modules AngularJS
import {JenkinsApp} from './app.angularjs.module';

// Module Angular 5
import {RisquesModule} from './components/risques/risques.module';
import { StateService } from '@uirouter/angular-hybrid/node_modules/@uirouter/angular';


setAngularLib(angular);

trace.enable(1);

export function getJenkinsService($injector) {
  return $injector.get('jenkins');
}

export function configRouter(router: UIRouter) {
  router.plugin(Visualizer);
}

// export const states = [{
//   name: '**',
//   url: '/',
//   loadChildren: './components/risques/risques.module#RisquesModule',
// }];

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
        // Modules GAMMA
        RisquesModule,
        // UIRouterModule.forChild({states, config: configRouter}),
    ],
    providers: [
        // Provide the SystemJsNgModuleLoader when using Angular lazy loading
        {provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader},
    ]
})
export class JenkinsAngularApp {
    ngDoBootstrap() {
    }
}
