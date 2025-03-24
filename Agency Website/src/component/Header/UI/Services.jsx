import React from "react";
import '../../../style/services.css'

const serviceData = [
    {
        icon:'ri-apps-line',
        title: 'App Devlopment',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ab veritatis eaque totam unde voluptates veniam ullam enim adipisci et!'
    },
    {
        icon:'ri-code-s-slash-line',
        title: 'Web Design',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ab veritatis eaque totam unde voluptates veniam ullam enim adipisci et!'
    },
    {
        icon:'ri-landscape-line',
        title: 'Graphic Designt',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ab veritatis eaque totam unde voluptates veniam ullam enim adipisci et!'
    },
    {
        icon:'ri-rocket-line',
        title: 'Digital Marketing',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ab veritatis eaque totam unde voluptates veniam ullam enim adipisci et!'
    },
]

export default function Services(){
    return(
       <section id="service">
        <div className="container">
            <div className="services_top-content">
                <h6 className="subtitle"> Our Services</h6>
                <h2>Save time managing your buisnes with</h2>
                <h2 className="highlight">  our best services</h2>
            </div>
            <div className="service_item_wrapper">
               {
                serviceData.map((item, index) =>(
                    <div className="services_item" key={index}>
                    <span className="service_icon"><i className={item.icon}></i></span>
                    <h3 className="service_title">{item.title}</h3>
                    <p className="description">{item.description}</p>

                </div> 
                ))
               }
            </div>
        </div>
       </section>
    )
}