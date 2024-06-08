import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
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
        <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/tastings" element={<Tastings />} />
          <Route path="/get-your-ticket" element={<GetYourTicket />} />
        </Routes>
        <About />
      </div>
    </Router>
  );
}

export default App;