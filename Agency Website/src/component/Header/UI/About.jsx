import React from "react";
import '../../../style/about.css'
import aboutImg from '../../../images/about-us.png'

const chooseData = [
    {
        icon: 'ri-wifi-line',
        title: 'First working process',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatem doloribus necessitatibus iure voluptas odit voluptate inventore laborum. Temporibus, voluptatum!'
    },

    {
        icon: 'ri-team-line',
        title: 'Dedicated team',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatem doloribus necessitatibus iure voluptas odit voluptate inventore laborum. Temporibus, voluptatum!'
    },

    {
        icon: 'ri-service-line',
        title: '24/7 Hours support',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatem doloribus necessitatibus iure voluptas odit voluptate inventore laborum. Temporibus, voluptatum!'
    },
]

export default function About(){
    return(
        <section id="about">
            <div className="container">
                <div className="about_wrapper">
                    <div className="about_content">
                        <h6 className="subtitle"> Why choose us</h6>
                        <h2>Specialist in advising on</h2>
                        <h2 className="highlight">  financial challenges</h2>
                        <p className="description about_content_desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente iure repellat corrupti, cumque ipsa nam repudiandae tempore obcaecati itaque, minima nostrum voluptas, ratione natus culpa quia vitae placeat ab impedit!</p>
                        <div className="chose_item_wrapper">
                            {
                               chooseData.map((item,index) =>(
                                <div className="choose_us-item" key={index}>
                                <span className="choose_us-icon"><i class={item.icon}></i></span>
                               <div>
                               <h4 className="choose_us-title">{item.title}</h4>
                               <p className="description">{item.desc}</p>
    
                               </div>
                            </div>
                               )) 
                            }
                        </div>

                       
                    </div>

                    <div className="about_img">
                        <img src={aboutImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}