import React from 'react';
import {BrowserRouter , Route,Switch } from 'react-router-dom';
import './App.css';
import './css/mystyle.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import MainContent from './components/maincontent/MainContent';
import Login from './components/login/Login';
import About from './components/about/About';
import Registration from './components/registration/Registration';
import Services from './components/services/Services';
import Dashboard from './components/dashboard/Dashboard';
import List from './components/dashboard/List';




function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact component={MainContent} />
          <Route path="/About" component={About} />
          <Route path="/Services" component={Services} />
          <Route path="/Registration" component={Registration} />
          <Route path="/Login" component={Login} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/List" component={List} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
