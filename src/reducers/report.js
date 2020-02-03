import { ADD_EMPLOYEE_DETAIL, GENERATE_REPORT } from '../actions/types';

const initialState = {
  name: '',
  image: '',
  bonus: {
    mondayBonus: '',
    tuesdayBonus: '',
    wednesdayBonus: '',
    thursdayBonus: '',
    fridayBonus: ''
  }
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_EMPLOYEE_DETAIL:
      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
}
