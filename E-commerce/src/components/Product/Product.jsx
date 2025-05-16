import React from "react";
import image1 from "../../assets/image1.jpg"
import "./Product.css"

function Product(){
    return(
        <div className="product">
            <img src={image1} alt="" />
           <div className="product-details">
             <span className="name">Samsung Galaxy M14 5G</span>
            <span className="price">Rs 15000/-</span>
            <button>Add +</button>
           </div>
        </div>
    )
}
 export default Product