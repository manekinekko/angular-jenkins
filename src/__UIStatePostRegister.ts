
import {StateRegistry } from '@uirouter/core';
import {risquesEvaluationsDetails} from './app/components/risques/risques.states';

export const STATES = [
  risquesEvaluationsDetails,
  // tout les autres "states“
];

export function UIStatePostRegister(platformRef) {
  const injector = platformRef.injector;
  const stateRegistery = injector.get(StateRegistry);
  STATES.map(state => stateRegistery.register(state));
  console.log(stateRegistery.states);
}
