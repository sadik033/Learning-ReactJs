import React from "react";
import "./CartCard.css"
import image1 from "../../assets/image1.jpg"
import {useDispatch} from "react-redux"
import { MdDeleteSweep } from "react-icons/md";
import { RemoveItem } from "../../redux/cartSlice";
function CartCard({name, price, image,id}){
    let dispatch= useDispatch()
    return(
        <div className="cartcard">
            <div className="left-card">
                <img src={image} alt="" />
                <div className="name-price">
                    <span> {name}</span>
                    <span>Rs {price}/-</span>
                </div>
            </div>
            <div className="right-card">
                <button onClick={()=>{
                    dispatch(RemoveItem(id))
                }}>Remove <MdDeleteSweep/></button>
            </div>
        </div>
    )
}

export default CartCard