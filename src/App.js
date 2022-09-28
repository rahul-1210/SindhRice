import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Speciality from './components/Speciality';
import Banner from '../src/components/Banner';
import Footer from '../src/components/Footer';
import Services from '../src/components/Services';
import About from '../src/components/About';
import Form from '../src/components/Form';
import Checkout from './components/Checkout';
import ContactUs from '../src/components/ContactUs';
import Home from './components/Home';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/products"
          element={
            <>
              <Navigation />
              <Banner />
              <Products />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navigation />
              <Banner />
              <About />
              <Services />
              <Footer />
            </>
          }
        />

        {/* <Route
          path="/shop"
          element={
            <>
              <Navigation />
              <Form />
              <Footer/>
            </>
          }
        /> */}

        <Route
          path="/checkout"
          element={
            <>
              <Navigation />
              <Checkout />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navigation />
              <ContactUs />
              <Footer />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <Banner />
              <Speciality />
              <Services />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
