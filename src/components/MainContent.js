import React from 'react';

function MainContent({ products }) {
  return (
    <div className="main-content">
      <h2>Item list:</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>{product.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainContent;
