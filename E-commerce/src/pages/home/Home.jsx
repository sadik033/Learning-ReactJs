import React from "react";
import Nav from "../../components/nav/Nav";
import bg from "../../assets/bg0.gif"
import "./Home.css"
import { category } from "../../Category"; 
import Product from "../../components/Product/Product";


function Home() {
    return(
        <div className="home">
            <div className="hero-bg">
                <img src={bg} alt="" />
            </div>
            
        <div className="category-section">
            {category.slice(0,5).map((item) =>(
                <div className="category-card">
                    <img src={item.Image} alt="" />
                    <span>{item.name}</span>
                </div>
            ))}
            </div>
            <h1 >Trending Products</h1>
            <Product/>
        </div>
    )
} 

export default Home