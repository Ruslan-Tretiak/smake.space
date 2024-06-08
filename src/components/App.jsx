import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Tastings from './Tastings';
import GetYourTicket from './GetYourTicket';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Hero} />
          <Route path="/tastings" component={Tastings} />
          <Route path="/get-your-ticket" component={GetYourTicket} />
        </Switch>
        <About />
      </div>
    </Router>
  );
}

export default App;