import React from 'react'
import { Carousel } from 'react-bootstrap';
import RiceBag from '../images/ricebag.jpg'
import RiceDiff from '../images/ricediff.jpg'
import RicePaddy from '../images/ricepaddy.jpg'
import WhiteRice from '../images/whiterice.jpg'

export default function Banner() {
    return (
        <div className='corous'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 corous-height"
                        src={RiceBag}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='h3 font-weight-bold color'>Indian Basmati</h3>
                        <p className="color font-weight-bold">Green Gold Rice export best basmati rice from all over the India</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 corous-height"
                        src={RiceDiff}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='h4 text-dark font-weight-bold'>Different Varities</h3>
                        <p className="text-dark">Green Gold Rice export and import all type of rice varity from all over the word</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 corous-height"
                        src={WhiteRice}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='h4 text-dark font-weight-bold'>Market Leader</h3>
                        <p className="text-dark">Green Gold Rice pvt ltd is a leader into a rice import and export bussiness</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 corous-height"
                        src={RicePaddy}
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                        <h3 className='h4 text-dark font-weight-bold'>Quality</h3>
                        <p className="text-dark">Green Gold Rice provide best quality of rice to its customer with full precaution.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
