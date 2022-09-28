import React from 'react';

import Item from './Item';
import { getBasketTotal } from './reducer';
import DiscountLogo from '../images/discountlogo.jpeg';
import { useStateValue } from './Stateprovider';
import { Link } from 'react-router-dom';
import BasketLogo from '../images/basket.jpg';

function Form() {
  const [{ basket, items }, dispatch] = useStateValue();

  const triggerType = (e) => {
    dispatch({
      type: 'FILTER_ITEMS',
      category: e.target.className,
    });
  };

  let totalcount = getBasketTotal(basket);
  return (
    <div>
      <div className="discount__header">
        <img src={DiscountLogo} />
      </div>
      <div className="basket__container">
        <Link to="/checkout">
          <img src={BasketLogo} />
        </Link>
      </div>
      <p className="items">{basket.length} Items</p>
      <p className="subtotal">Subtotal Rs. {totalcount}</p>
      <p className="category__head">Categories</p>
      <div className="category">
        <button onClick={triggerType} className="all">
          All
        </button>
        <button onClick={triggerType} className="white">
          White Rice
        </button>
        <button onClick={triggerType} className="brown">
          Brown Rice
        </button>
        <button onClick={triggerType} className="basmati">
          Basmati Rice
        </button>
        <button onClick={triggerType} className="wild">
          Wild Rice
        </button>
        <button onClick={triggerType} className="red">
          Red Rice
        </button>
        <button onClick={triggerType} className="bamboo">
          Bamboo Rice
        </button>
      </div>
      <div className="items__list">
        {items.map((item, idx) => {
          return <Item id={idx} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Form;