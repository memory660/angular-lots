import { createReducer, on } from '@ngrx/store';
import * as counterActions from './counter.actions';

export const initialState = 0;

const _counterReducer = createReducer(initialState,
  on( counterActions.increment, state => {
    console.log(state);
    return state + 1;
  }),
  on( counterActions.decrement, state => state - 1),

  on( counterActions.multiply, (state, props)  => state * props.n), // Parámetros: todas las propiedades
  on( counterActions.divide,   (state, { n })  => state / n),       // Parámetros: solo la propiedad 'n'

  on( counterActions.reset, () => initialState)
);

export function counterReducer(state, action) {
  console.log(state, action);

  return _counterReducer(state, action);
}
