import React from 'react';
import { useStateValue } from './Stateprovider';
import CheckoutItem from './CheckoutItem';
import BackgroundBasket from '../images/backgroundbasket.jpg';
import { getBasketTotal } from './reducer';

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  const total = getBasketTotal(basket);

  const recievedOrder = () => {
    alert('Your order recieved sucessfully');
    dispatch({
      type: 'EMPTY_BASKET',
    });
  };

  return (
    <div>
      <div className="checkout__header">
        <img src={BackgroundBasket} />
        <div className="subtotal__header">
          <p>{basket.length} Items</p>
          <p>Subtotal Rs. {total}</p>
          <button onClick={recievedOrder}>Proceed to Checkout</button>
        </div>
      </div>
      <p className="basket__header">Your Basket</p>
      {basket.map((item) => {
        return <CheckoutItem item={item} />;
      })}
    </div>
  );
}

export default Checkout;