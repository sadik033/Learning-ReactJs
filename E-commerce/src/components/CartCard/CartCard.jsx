import React from "react";
import "./CartCard.css"
import image1 from "../../assets/image1.jpg"
import { MdDeleteSweep } from "react-icons/md";
function CartCard(){
    return(
        <div className="cartcard">
            <div className="left-card">
                <img src={image1} alt="" />
                <div className="name-price">
                    <span>Samsung</span>
                    <span>Rs 15000/-</span>
                </div>
            </div>
            <div className="right-card">
                <button>Remove <MdDeleteSweep /></button>
            </div>
        </div>
    )
}

export default CartCard