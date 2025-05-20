import React, { useState } from "react";
import "./Cart.css"
import CartCard from "../../components/CartCard/CartCard";
import {useSelector} from 'react-redux'
import ec from "../../assets/emptycart.png"
function Cart(){
    let items= useSelector(state=>state)
    return(
        <div className="cart">
            {items.cart.length<=0? <div className="empty-cart">
                <img src={ec} alt="Empty cart" />
                <h1>Empty Cart</h1>
                </div>:
                <div className="cartcard-section">
                    {items.cart.map((item)=>(
                        <CartCard name={item.name} price={item.price} image={item.image} id={item.id}/>
                    ))}
                </div>
                }
            
        </div>
    )
}

export default Cart