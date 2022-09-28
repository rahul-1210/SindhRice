import React from 'react';
import FacebookIcon from '../images/Facebook.png';
import TwitterIcon from '../images/twi.png';
import InstagramIcon from '../images/instagram.jpeg';
import PinterestIcon from '../images/social_pinterest.png';

export default function Footer() {
  return (
    <div className="container-fluid mt-3">
      <div className="row bg-dark">
        <div className="col-sm-4">
          <h3 className="h3 text-light"> Stay Connected</h3>
          <p className="text-light">
            With a 50 year heritage and an existence since 1970, . is India’s
            best integrated rice company with a comprehensive product chain and
            best quality of rice from all over the world.
          </p>
          <div className="d-flex justify-content-center mb-2">
            <input
              type="email"
              className="w-50 mt-2 p-2"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <input
              className="btn-bg mt-2 p-2"
              type="submit"
              value="Sign-up"
            ></input>
          </div>
        </div>
        <div className="col-sm-4 padd">
          <h3 className="h3 text-light">Quick Links</h3>
          <ul className="text-light">
            <li>Products</li>
            <li>Shop us</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="col-sm-4 text-light padd">
          <h3 className="h3">Contact us</h3>
          <p>
            The Mall Road, Near, Pratappura Crossing, Baluganj, Rakabganj, Agra,
            Uttar Pradesh 282001
          </p>
          <p>email-sindhrice@gmail.com</p>
        </div>
      </div>
      <div className="row foot">
        <div className="col-sm-6 d-flex justify-content-around mt-3 mb-3">
          <div className="img-h">
            <img
              src={FacebookIcon}
              alt="Facebook Icon"
              className="rounded-circle"
            />{' '}
            <span className="text-light">Facebook</span>
          </div>
          <div className="img-h">
            <img src={TwitterIcon} alt="Facebook Icon" />
            <span className="text-light">Twitter</span>
          </div>
          <div className="img-h">
            <img src={InstagramIcon} alt="Facebook Icon" />{' '}
            <span className="text-light">Instagram</span>
          </div>
          <div className="img-h">
            <img src={PinterestIcon} alt="Facebook Icon" />{' '}
            <span className="text-light">Pinterest</span>
          </div>
        </div>
        <div className="col-sm-6">
          <p className="mt-4 mb-4 text-light">
            All right reserved by Sindh Rice Pvt. Ltd. 1975-2022
          </p>
        </div>
      </div>
    </div>
  );
}
