import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './global.css';
import Details from './pages/Details/info';
import Home from './pages/home/Home';



ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element= {<Home />} / >
        <Route path='/Details/:id' element= {<Details />} / >
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
