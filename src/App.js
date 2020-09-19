import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Route path='/' exact component={Home} />
      <Footer></Footer>
    </Router>
  );
}

export default App;
