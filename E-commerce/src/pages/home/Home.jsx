import React from "react";
import Nav from "../../components/nav/Nav";
import bg from "../../assets/bg0.gif"
import "./Home.css"
import { category } from "../../Category";

function Home() {
    return(
        <div className="home">
            <div className="hero-bg">
                <img src={bg} alt="" />
            </div>
            
        <div className="category-section">
            {category.map((item) =>(
                <div className="category-card">
                    <img src={item.Image} alt="" />
                    <span>{item.name}</span>
                </div>
            ))}
            </div>
        </div>
    )
} 

export default Home