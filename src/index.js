import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './css/reset.css';
import './css/main.css';
import './css/primary.css';
import './css/Speciality.css';
import './css/Navigation.css';
import './css/Product.css';
import './css/Products.css';
import './css/Form.css';
import './css/item.css';
import './css/Checkout.css';
import './css/CheckoutItem.css';
import './css/About.css';
import { BrowserRouter } from 'react-router-dom';
import { StateProvider } from './components/Stateprovider';
import { initialState } from './components/reducer';
import reducer from './components/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
