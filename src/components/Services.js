import React from 'react'
import PricingIcon from '../images/Pricing-icon.png'
import GroceryIcon from '../images/grocery.png'
import ShipingIcon from '../images/shiping.png'

export default function Services() {
    return (
        <div className='container-fluid'>
            <div className='d-flex justify-content-center'>
                <h3 className='h4 pt-4 pb-1 serv w-50'> Our Services</h3>
            </div>
            <div className='row d-flex justify-content-around gap-2'>
                <div className="col-sm-3">
                    <div className="card">
                        <img className="card-img-top icon p-1" src={PricingIcon} alt="Pricing Icon" />
                        <div className="card-body ">
                            <h5 className="card-title serv-header">Transparent Pricing</h5>
                            <p className="card-text text-left desc"> We sell all the products at the same price which is displayed on the page and also displays the charges to our customers.
                                We create a transparent pricing system for our customers to avoid pricing issues.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <img className="card-img-top icon p-1" src={GroceryIcon} alt="Grocery Icon" />
                        <div className="card-body">
                            <h5 className="card-title serv-header">Products</h5>
                            <p className="card-text desc"> We sell the most qualitative seven varieties of rice. We deliver all popular varieties of India Gate Rice.
                                Each variety of rice is fresh and is grown organically to deliver its uniqueness in taste.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <img className="card-img-top icon p-1" src={ShipingIcon} alt="Shiping Icon" />
                        <div className="card-body">
                            <h5 className="card-title serv-header">Shipping and delivery</h5>
                            <p className="card-text text-left desc">We provide free shipping to our customers across all over India on a minimum order of Rs. 20,000. 
                            The selected product ordered by the user will get delivered within 6 to 10 working days.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

