import React from "react";
import '../../../style/testimonial.css';

import Slider from 'react-slick'

import ava01 from '../../../images/ava-1.jpg'

export default function Testimonial(){

    const settings = {
        dots:false,
        infinite: true,
        speed: 1000,
        autoplay:true,
        autoplaySpeed:3000,
        slideToShow:1,
        slideToScroll:1
    }



    return(
       <section>
         <div className="container">
            <div className="slider_content_top">
                <h6 className="subtitle">Testimonial</h6>
                <h2>Trusted by more than <span className="highlight">5,000 customer</span> </h2>
            </div>

            <div className="slider_wrapper">
            <Slider {...settings}>
            <div className="slider_item">
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eligendi ut nihil aspernatur eveniet rerum? Corporis at dolor rem ullam omnis laborum, adipisci culpa, quae consequatur eligendi fugiat voluptatum labore fuga earum. Provident omnis consectetur maiores doloremque voluptate repellendus cupiditate?</p>

                <div className="customer_details">
                    <div className="customer_img">
                        <img src={ava01} alt="" />
                    </div>
                    <div>
                        <h5 className="customer_name">Jhon Doe</h5>
                        <p className="description">CEO, Work</p>
                    </div>
                </div>
            </div>
            <div className="slider_item">
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eligendi ut nihil aspernatur eveniet rerum? Corporis at dolor rem ullam omnis laborum, adipisci culpa, quae consequatur eligendi fugiat voluptatum labore fuga earum. Provident omnis consectetur maiores doloremque voluptate repellendus cupiditate?</p>

                <div className="customer_details">
                    <div className="customer_img">
                        <img src={ava01} alt="" />
                    </div>
                    <div>
                        <h5 className="customer_name">Jhon Doe</h5>
                        <p className="description">CEO, Work</p>
                    </div>
                </div>
            </div>
            <div className="slider_item">
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eligendi ut nihil aspernatur eveniet rerum? Corporis at dolor rem ullam omnis laborum, adipisci culpa, quae consequatur eligendi fugiat voluptatum labore fuga earum. Provident omnis consectetur maiores doloremque voluptate repellendus cupiditate?</p>

                <div className="customer_details">
                    <div className="customer_img">
                        <img src={ava01} alt="" />
                    </div>
                    <div>
                        <h5 className="customer_name">Jhon Doe</h5>
                        <p className="description">CEO, Work</p>
                    </div>
                </div>
            </div>
        </Slider> 
            </div>
         </div>
       </section>
    )
}