import {Component, OnInit} from '@angular/core';

@Component({
    selector: '[gamma-risques-evaluations-details]',
    templateUrl: 'evaluations-details.component.html'
})
export class EvaluationsDetailsComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
        console.log('EvaluationsDetailsComponent');
    }
}