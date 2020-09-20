import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Product from './components/pages/Products/Product';
import Footer from './components/pages/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Product} />
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
