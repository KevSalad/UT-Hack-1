import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signUp" component={SignUpPage} />
        <Route exact path="/createAccount" component={CreateAccount} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
