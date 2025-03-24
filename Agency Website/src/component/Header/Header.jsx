import React from "react";
import "./header.css";

const nav_links=[
    {
        path: '#home',
        display:'Home'
    },
    {
        path: '#about',
        display:'About'
    },
    {
        path: '#services',
        display:'Services'
    },
    {
        path: '#feedback',
        display:'Feedback'
    },
]

export default function Header(){
    return(
        <header className="header">
            <div className="container">
                <div className="nav_wrapper">
                   <div className="logo">
                    <h2>SADIk</h2>
                    {/* <p>Grow with us</p> */}
                    </div> 
                    {/*========= navigation =======*/}
                    <div className="navigation">
                        <ul className="menu">
                            {
                                nav_links.map((item,index) =>(
                                  <li className="menu_item"><a href={item.path} className="menu_link">
                                    {item.display}
                                    </a></li>  
                                ))
                            }
                        </ul>
                    </div>
                    {/*========= light mode =======*/}
                    <div className="light_mode">
                        <span><i class="ri-sun-line"></i>Light Mode</span>
                    </div>
                </div>
            </div>
        </header>
    )
}