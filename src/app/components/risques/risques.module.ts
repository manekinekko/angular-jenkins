// Angular
import {CommonModule} from "@angular/common"
import {NgModule} from "@angular/core";

// ui-router
import { UIRouterModule } from '@uirouter/angular';

// Components
import {EvaluationsDetailsComponent} from "./evaluations/evaluations-details/evaluations-details.component"

// States
import {risquesEvaluationsDetails} from "./risques.states"

export let RISQUES_STATES = [risquesEvaluationsDetails];

@NgModule({
    imports: [
        CommonModule,
        // Provides the @uirouter/angular directives
        UIRouterModule.forChild({states: RISQUES_STATES}),
    ],
    declarations: [
        EvaluationsDetailsComponent,
    ],
    entryComponents: [
        EvaluationsDetailsComponent,
    ]
})
export class RisquesModule {}
