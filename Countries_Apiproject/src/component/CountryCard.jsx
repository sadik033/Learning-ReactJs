import React from "react";
import { Link } from "react-router-dom";

export default function CountryCard({name,flag,region, population, capital}){
    // console.log({name});
    return(
        <Link className="country-card" to={`/${name}`}>
        <img src={flag} alt= {name + 'Flag'} />
        <div className="card-text">
            <h3 className="card-title">{name}</h3>
            <p><b>Population: </b>{population}</p>
            <p><b>Region: </b>{region}</p>
            <p><b>Capital: </b>{capital}</p>
        </div>
        </Link>
    )
}