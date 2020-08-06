import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from '../screen/home/Home'
import Order from '../screen/order/Order';
import Thanks from '../screen/thanks/Thanks';


function App() {
  return (
    <div className="App">
        <Router>
          <>
            <Route exact path='/' component={Home}/>
            <Route path='/order' component={Order}/>
            <Route path='/thanks' component={Thanks}/>
          </>
        </Router>
    </div>
  );
}

export default App;
