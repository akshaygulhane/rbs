import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = require('./components/Home');
const Rooms = require('./components/Home');
const Times = require('./components/Home');

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/times" component={Times} />
      </div>
    </Router>
  );
}

export default App;
