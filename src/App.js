import React from 'react';
import {BrowserRouter , Route,Switch } from 'react-router-dom';
import './App.css';
import './css/mystyle.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Header from './components/header/Header';
import MainContent from './components/maincontent/MainContent';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import About from './components/about/About';
import Registration from './components/registration/Registration';
import Services from './components/services/Services';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={MainContent} />
          <Route path="/About" component={About} />
          <Route path="/Services" component={Services} />
          <Route path="/Registration" component={Registration} />
          <Route path="/Login" component={Login} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
