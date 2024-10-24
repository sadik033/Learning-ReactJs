import React from "react";

function Card({username,hobby,image,wd}){
    console.log(username);
    return(
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden {wd} mt-4 ">
        <img src={image} alt="Background" class="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
            <h2 className="text-white text-xl font-bold"> {username}</h2>
            <p className="text-gray-300">Web Developer | {hobby} | Coffee Lover</p>
        </div>
    </div>
    )
}

export default Card