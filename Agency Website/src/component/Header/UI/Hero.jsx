import React from "react";
import "../../../style/hero.css";
import heroDarkImg from '../../../images/hero-img.png'


export default function Hero(){
    return(
        <section className="hero_section">
            <div className="container">
                <div className="hero_wrapper">
                    <div className="hero_content">
                       <div>
                       <h2>We're Creating perfect</h2> 
                       <h2>Digital solutiont</h2> 
                       <h2 className="highlight">Promote Your Brand</h2>
                       </div>
                       <p className="description">Lorem ipsum, dolor sit amet consectetur 
                        adipisicing elit. Esse iste est recusandae reprehenderit 
                        consectetur itaque!</p>
                        <div className="hero_btns">
                           <button className="primary_btn">Get Started NOW</button> 
                           <button className="secondary_btn"> Discover More</button>
                        </div>
                    </div>
                    <div className="hero_img">
                        <img className="hero-main-img" src={heroDarkImg} alt="hero-img" />
                    </div>
                </div>
            </div>
        </section>

    )
}