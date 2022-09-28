import React from 'react';

function Product({ img, text, idx, type }) {
  if (idx % 2 === 0) {
    return (
      <div>
        <div className="product__image">
          <img src={img} />
          <p>{text}</p>
        </div>
        <p className="rice__type">{type}</p>
      </div>
    );
  } else {
    return (
      <div>
        <div className="product__image">
          <p>{text}</p>
          <img src={img} />
        </div>
        <p className="rice__type_2">{type}</p>
      </div>
    );
  }
}

export default Product;
