import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Live from './components/Live';
import History from "./components/History";
import Transaction from "./components/Transaction";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

ReactDOM.render(
      <Router>
          <Routes>
              <Route exact path='/' element={< App/>}/>
              <Route exact path='/live' element={< Live/>}/>
              <Route exact path='/history' element={< History/>}/>
              <Route exact path='/transaction' element={< Transaction/>}/>
          </Routes>
      </Router>,
  document.getElementById('root')
);



