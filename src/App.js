import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import EmployeesReports from './components/EmployeesReports';
import EmployeeReportForm from './components/EmployeeReportForm';

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path='/' component={EmployeesReports} />
          <Route exact path='/reportForm' component={EmployeeReportForm} />
          <Route exact path='/report/:name' component={EmployeeReportForm} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
