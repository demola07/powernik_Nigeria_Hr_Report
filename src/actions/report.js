import { ADD_EMPLOYEE_DETAIL, GENERATE_REPORT } from './types';
import axios from 'axios';

export const addEmpolyeeDetail = report => async dispatch => {
  try {
    const res = await axios.get('https://randomuser.me/api/?inc=picture');
    const employeeImage = res.data.results[0].picture.large;
    report.image = employeeImage;
  } catch (error) {
    console.error(error);
  }

  const {
    mondayBonus,
    tuesdayBonus,
    wednesdayBonus,
    thursdayBonus,
    fridayBonus
  } = report.bonus;

  report.weekBonus =
    mondayBonus + tuesdayBonus + wednesdayBonus + thursdayBonus + fridayBonus;

  dispatch({
    type: ADD_EMPLOYEE_DETAIL,
    payload: report
  });
};

export const generateReport = () => dispatch => {};
