import React from 'react';
import Ricepack from '../images/ricepack.jpg';
import Vishal from '../images/1.jpg';
import Ashif from '../images/2.jpg';

export default function About() {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center">
        <h3 className="h4 pt-4 pb-1 serv w-50">Co-Founders</h3>
      </div>
      <div className="co-founders">
        <div>
          <img src={Vishal} alt="" />
          <h1>Vishal</h1>
        </div>
        <div>
          <img src={Ashif} alt="" />
          <h1>Ashif</h1>
        </div>
      </div>
      <div className="row d-flex">
        <div className="col-sm-6 d-flex flex-column justify-content-center align-items-center gap-2">
          <img src={Ricepack} alt="rice pack" className="w-100" />
        </div>

        <div className="col-md-6">
          <h3 className="h3 mt-4 about-head">
            About <span className="text-success">Sindh</span>
            <span className="gold"> Rice</span> Since 1975
          </h3>
          <p className="desc2">
            Presenting Sindh Rice Private Limited, the only best in class, with
            premium quality and delivery commitments, The Sindh rice, has been
            delivering the best in length Basmati as well as Non- basmati Rice
            variety to our buyers all over the globe. Our Rice is exclusively
            selected and hand picked from different regions of India, and is
            aggregated in our facilities, where it is kept and stored in the
            correct temperature to nourish for almost two years. Our rice is
            just not recognized but also endorsed by several government
            recognized importing companies in gulf and Europe..
          </p>

          <h1 className="h3 mt-4 about-head">Why Sindh Rice</h1>
          <p className="desc2">
            Here are some of the answers to the above query that will help you
            to know more about us
          </p>
          <ul className="mt-3 desc2 ul-disc">
            <li>
              We have a well qualified and experienced team of farmer that helps
              us to more for best rice import and export.
            </li>
            <li>
              We also have a well-qualified team that will solve your queries
              and doubts with a detailed explanation.
            </li>
            <li>
              We provide 24/7 service for our customers to satisfy their needs
              and solve their doubts.
            </li>
          </ul>
          <p className="desc2 mt-3">
            Our Team has a good acumen of Rice quality. Our Team always tries to
            utilize the latest technologies that can enhance the productivity of
            farmer and crops. We do not use any chemical fertilizers for growing
            the crops and our products are best quality.
          </p>
        </div>
      </div>
    </div>
  );
}
