import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Menu from './components/Menu';

function App() {
  const products = [
    { id: 1, name: 'Item 1'},
    { id: 2, name: 'Item 2'},
    { id: 3, name: 'Item 3'},
    { id: 4, name: 'Cat'},
    { id: 5, name: 'Item 5'},
    { id: 6, name: 'Item 6'},
  ];

  return (
    <div className="App">
      <Header />
      <Menu />
      <MainContent products={products} />
      <Footer />
    </div>
  );
}

export default App;
