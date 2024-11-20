import React, { useEffect, useState } from "react";
import './CountryDetails.css'

export default function CountryDetails(){

    const countryName = new URLSearchParams(location.search).get('name')

    const [countryData, setCountryData]= useState(null)

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
        .then(res => res.json())
        .then(([data])=>{
            console.log(data)
            setCountryData({
                name:data.name.common,
                nativeName: Object.values(data.name.nativeName)[0].common,
                population: data.population,
                region: data.region,
                flag: data.flags.svg,
                subregion: data.subregion,
                capital: data.capital,
                tld: data.tld,
                currencies: Object.values(data.currencies)
                .map((currency) => currency.name)
                .join(', '),
                
            })
        })
    }, [])
    return(
        countryData === null ? ('loading.....') : <main>
        <div className="country-details-container">
            <a href="#" className ="back-button"><i className="fa-solid fa-arrow-left"></i>&nbsp;  Back</a>
        <div className="country-details">
            <img  src= {countryData.flag} alt="" />
            <div className="details-text-container">
                <h1>{countryData.name}</h1>
                <div className="details-text">
                    <p><b>Native Name: {countryData.nativeName} </b>

                    <span className="native-Name"></span></p>
                    <p><b>Population: {countryData.population.toLocaleString('en-IN')} </b>

                    <span className="population"></span></p>
                    <p><b>Region: {countryData.region} </b> <span className="Region">

                        </span></p>
                    <p><b>Sub-Region: {countryData.subregion} </b><span className="sub-Region">

                        </span></p>
                    <p><b>Capital: </b>  { countryData.capital} <span className="capital">
                        
                        </span></p>
                    <p><b>Top Level Doamin: </b> {countryData.tld}<span className="top-level-domain">
                        
                        </span></p>
                    <p><b>Currencies: </b>{countryData.currencies}  <span className="currencies">
                        
                        </span></p>
                    <p><b>Language: </b><span className="language"></span></p>
                </div>
                <div className="border-countries">
                    <b>Border Countries: </b>&nbsp; 
                </div>
            </div>
        </div>
        </div>
     </main>
    )
}