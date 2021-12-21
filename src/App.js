
import React from 'react';
import './App.css';
import {Home} from './components/Home'
import { Universities } from './components/Universities';
import { Postal_lookup } from './components/Postal_lookup';
import {Navigation} from './components/Navigation'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


function App() {
  
  return (
    <BrowserRouter>
    
    <div className="container">

      <h2 className='m-3 d-flex justify-content-center'>Lanuchpad Frontend Code Challenge &nbsp </h2>
      
      <Navigation/>

     
      <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/Universities' component={Universities} exact />
      <Route path='/Postal_lookup' component={Postal_lookup} exact />
         
      </Switch>
           
    </div>
    </BrowserRouter>

  );
}

export default App;
