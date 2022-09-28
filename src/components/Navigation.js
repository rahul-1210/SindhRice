import React from 'react';
import LogoImage from '../images/ricegrain.jpg';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <div className="company__logo">
            <span className="part__one">Sindh</span>
            <span className="part__two">Rice</span>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to="/" className="nav-link active" aria-current="page">
              <li className="nav-item">Home</li>
            </Link>
            <Link
              to="/products"
              className="nav-link active"
              aria-current="page"
            >
              <li className="nav-item">Products</li>
            </Link>
            {/* <Link to="/shop" className="nav-link active" aria-current="page">
                            <li className="nav-item">Shop Us</li>
                        </Link> */}
            <Link to="/about" className="nav-link active" aria-current="page">
              <li className="nav-item">About</li>
            </Link>
            <Link to="/contact" className="nav-link active" aria-current="page">
              <li className="nav-item">Contact us</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
