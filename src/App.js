import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Route, Routes } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<News pageSize={12} country="in" category="General"/>}/>
          <Route path='/business' element={<News pageSize={12} country="in" category="Business"/>}/>
          <Route path='/entertainment' element={<News pageSize={12} country="in" category="Entertainment"/>}/>
          <Route path='/health' element={<News pageSize={12} country="in" category="Health"/>}/>
          <Route path='/science' element={<News pageSize={12} country="in" category="Science"/>}/>
          <Route path='/sports' element={<News pageSize={12} country="in" category="Sports"/>}/>
          <Route path='/technology' element={<News pageSize={12} country="in" category="Technology"/>}/>
        </Routes>
     </div>
    )
  }
}

