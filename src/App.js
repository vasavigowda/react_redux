import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Age from './Components/Age';
import Task2 from './Components/Task2';
import Task3 from './Components/Task3';
import Task4 from './Components/Task4';
import Task5 from './Components/Task5';
import Task6 from './Components/Task6';

function App() {
  return (
    <div className="App">
   {/* <Age/> */}
      <Router>
        <switch>
        <Route exact path='/' component={Age}></Route> 
        <Route exact path='/one' component={Task2}></Route>
        <Route exact path='/two' component={Task3}></Route>
        <Route exact path='/three' component={Task4}></Route>
        <Route exact path='/five' component={Task5}></Route>
        <Route exact path='/six' component={Task6}></Route>

        </switch>
      </Router>
    </div>
  );
}

export default App;
