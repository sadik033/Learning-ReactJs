import React from "react";
import "./Contact.css"

function Contact(){
    return(
        <div className="contact">
            <form action="">
                <input type="text" placeholder="Enter Your Name..." name="username"/>
                <input type="email" placeholder="Email"  name="email"/>
                <input type="message" placeholder="Message" name="message"/>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Contact