import {Ng2StateDeclaration} from "@uirouter/angular"
import {EvaluationsDetailsComponent} from "./evaluations/evaluations-details/evaluations-details.component"

export const risquesEvaluationsDetails: Ng2StateDeclaration = {
    name: 'jenkins.risques.evaluations.view',
    url: '/view/:contexteId/:entiteId',
    views: {
        'content@jenkins': {
           component: EvaluationsDetailsComponent
        }
    }
};
