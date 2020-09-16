import React from 'react';
//import logo from './logo.svg';
import './App.css';
import NaveBar from './Components/NaveBar';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';

function App() {
  return (
    <>
    <NaveBar />
    <HomePage />
    <Footer />
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
