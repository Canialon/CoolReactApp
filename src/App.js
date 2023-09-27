// App.js
import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Menu from './components/Menu';

function App() {
  const initialProducts = [
    { id: 1, name: 'Item 1', selected: false },
    { id: 2, name: 'Item 2', selected: false },
    { id: 3, name: 'Item 3', selected: false },
    { id: 4, name: 'Cat', selected: false },
    { id: 5, name: 'Item 5', selected: false },
    { id: 6, name: 'Item 6', selected: false },
  ];

  const [products, setProducts] = useState(initialProducts);

  const handleCheckboxChange = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, selected: !product.selected } : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div className="App">
      <Header />
      <Menu />
      <MainContent products={products} onCheckboxChange={handleCheckboxChange} />
      <Footer />
    </div>
  );
}

export default App;
