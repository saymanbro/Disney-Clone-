import React from 'react';
import './App.css';
import Home from './Component/Home';
import Header from './Component/Header';
import {BrowserRouter as Router, 
Switch, 
Route} from 'react-router-dom';
import Details from './Component/Details';
import Login from './Component/Login';

const App = () => {
    return (
        <Router>
       
       <Header />
    
          <Switch>
          
              <Route path='/detail/:id'>
                  <Details />
              </Route>
              <Route path='/login'>
                  <Login />
              </Route>
            
              <Route path='/'>
                  <Home />
              </Route>
          </Switch>
        </Router>
    );
};

export default App;