import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';

function App() {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signUp" component={SignUpPage} />
      </Switch>
    </Router>
  );
}

export default App;
