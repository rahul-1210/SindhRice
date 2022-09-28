import React from 'react';
import Farmers from '../images/farmer3.jpg';
import Factory from '../images/factory3.png';
import Warehouse from '../images/warehouse.png';

function Speciality() {
  return (
    <div>
      <div className="head p-1">
        <h4 className='h4'>Our Products Speciality</h4>
      </div>
      <div className="speciality__container">
        <div className="farmers">
          <img src={Farmers} alt="" />
          <p>Comes from quality field using Mordern farming techniques.</p>
        </div>
        <div className="factory">
          <img src={Factory} alt="" />
          <p>Processed with help of advanced methods and machinery.</p>
        </div>
        <div className="warehouse">
          <img src={Warehouse} alt="" />
          <p>Kept in best storage facility to ensure its quality.</p>
        </div>
      </div>
    </div>
  );
}

export default Speciality;