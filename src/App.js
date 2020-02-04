import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import EmployeesReports from './components/EmployeesReports';
import EmployeeReportForm from './components/EmployeeReportForm';
import EmployeeReport from './components/EmployeeReport';

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path='/reportForm' component={EmployeeReportForm} />
          <Route exact path='/report' component={EmployeesReports} />
          <Route exact path='/report/:name' component={EmployeeReport} />
          <Route path='*' component={EmployeesReports} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
