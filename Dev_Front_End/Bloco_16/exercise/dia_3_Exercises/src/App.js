import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import FormDataDisplay from './pages/FormDataDisplay';
import PersonalForm from './pages/PersonalForm';
import ProfessionalForm from './pages/ProfessionalForm';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ PersonalForm } />
        <Route path="/professionalForm" component={ ProfessionalForm } />
        <Route path="/formDisplay" component={ FormDataDisplay } />
      </Switch>
    );
  }
}
export default App;
