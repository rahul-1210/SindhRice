import React from 'react'
import Agramap from '../images/Agra_map.jpg'

export default function ContactUs() {
    return (
        <div className='container-fluid'>

            <div className="row">
                <div className='d-flex justify-content-center'>
                    <h3 className='h3 pt-4 pb-1 serv w-25'> Office Locations</h3>
                </div>
                <div className='row d-flex justify-content-around mb-3 gap-2'>
                    <div className="col-sm-3">
                        <div className="card">
                            <div className="card-body ">
                                <h5 className="card-title serv-header">Agra, India</h5>
                                <p className="card-text text-left desc">
                                    The Mall Road, Near, Pratappura Crossing, Baluganj, Rakabganj, Agra, Uttar Pradesh 282001
                                </p>
                                <p className="card-text text-left desc">Call us- (+91)8976543212</p>
                                <p className="card-text text-left desc">Email us - greengoldriceltd@ggr.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title serv-header">Texas,United State</h5>
                                <p className="card-text desc">8825 Highway 6 N Houston, Texas , United State</p>
                                <p className="card-text text-left desc">Call us- 281-859-9016</p>
                                <p className="card-text text-left desc">Email us - greengoldriceltd@ggr.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title serv-header">Colombo, Sri Lanka</h5>
                                <p className="card-text text-left desc">WV43+QR1, Sir James Pieris Mawatha, Colombo, Sri Lanka</p>
                                <p className="card-text text-left desc">Call us- 143-678-7215</p>
                                <p className="card-text text-left desc">Email us - greengoldriceltd@ggr.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-xs-9 col-md-6 map-head">
                    <img src={Agramap} alt="agra city map" className='map' />
                </div>
                <div className="col-md-6 form-head">
                    <form className=" d-flex flex-column justify-content-center align-items-center gap-3">
                        <h1 className='enquiry h4'>Send Enquiry</h1>
                        <div className="form-group w-50">
                            <input type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Name" />

                        </div>
                        <div className="form-group w-50">
                            <input type="email" className="form-control" id="email1" aria-describedby="emailHelp" placeholder="Email" />

                        </div>
                        <div className="form-group w-50">
                            <input type="number" className="form-control" id="mobno" placeholder="Mobile no" />
                        </div>
                        <div className="form-group w-50">
                            <textarea className="form-control" id="textarea" rows="3" placeholder="Enter your Enquiry"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
