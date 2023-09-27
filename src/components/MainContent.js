import React from 'react';

function MainContent({ products, onCheckboxChange }) {
  return (
    <div className="main-content">
      <h2>Item list:</h2>
      {products.map((product) => (
        <div key={product.id}>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={product.selected}
              onChange={() => onCheckboxChange(product.id)}
            />
            {product.name}
          </label>
        </div>
      ))}
    </div>
  );
}

export default MainContent;
