import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
