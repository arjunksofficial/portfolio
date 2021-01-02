import React from 'react';
import './App.css';
import Cover from './components/Cover';
import Navbar from './components/Navbar';
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Cover/>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
