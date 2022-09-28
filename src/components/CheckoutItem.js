import React from 'react';
import { useStateValue } from './Stateprovider';

function CheckoutItem({ item }) {
  const [{ basket }, dispatch] = useStateValue();

  const deleteFromBasket = () => {
    dispatch({
      type: 'DELETE_FROM_BASKET',
      item: item,
    });
  };

  return (
    <div className="checkoutitem__box">
      <img src={item.image} />
      <p className='price__checkout'>Rs. {item.price}</p>
      <p className='quantity__checkout'>{item.quantity}Kg</p>
      <p className='description__checkout'>{item.description}</p>
      <button onClick={deleteFromBasket} type="button" className="btn btn-dark">
        Remove from Basket
      </button>
    </div>
  );
}

export default CheckoutItem;