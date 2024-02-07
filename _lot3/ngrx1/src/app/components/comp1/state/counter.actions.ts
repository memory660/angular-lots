import { createAction, props  } from '@ngrx/store';

export const increment = createAction(
  '[COUNTER] INCREMENT'
);

export const decrement = createAction(
  '[COUNTER] DECREMENT'
);

export const multiply = createAction(
  '[COUNTER] MULTIPLY',
  props<{ n: number }>()
);

export const divide = createAction(
  '[COUNTER] DIVIDE',
  props<{ n: number }>()
);

export const reset = createAction(
  '[COUNTER] RESET'
);
