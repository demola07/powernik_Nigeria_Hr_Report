import { ADD_EMPLOYEE_DETAIL, GENERATE_REPORT } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_EMPLOYEE_DETAIL:
      state.push(payload);
      return [...state];

    default:
      return state;
  }
}
