import React, { useEffect, useState } from "react";
import './CountryDetails.css'
import { Link, useLocation, useParams } from "react-router-dom";
import CountryDetailsShimmer from "./CountryDetailsSimmer"

export default function CountryDetails(){

    const params = useParams()
    const { state } = useLocation()
    console.log(state);


    const countryName = params.country
    
    const [countryData, setCountryData]= useState(null)
    const [notFound, setNotFound] = useState(false)

    function updateCountryData(data){
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
           borders: [] 
        })
        if(!data.borders){
            data.borders=[]
        }
        Promise.all(data.borders.map((border) =>{
            return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((res) => res.json())
            .then(([country]) => country.name.common)
        })).then((borders) =>{
            setTimeout(() => setCountryData((prevState) => ({...prevState, borders})))
        })
    
    }

    useEffect(()=>{
        if (state) {
            updateCountryData(state) 
            return 
        }

        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
        .then(res => res.json())
        .then(([data])=>{
            updateCountryData(data)
        })
        .catch((err) =>{
            setNotFound(true)
        })
    }, [countryName])
    
    if(notFound){
        return <div>Country Not FOUND....</div>

    }
    return(
        countryData === null ? ( <CountryDetailsShimmer/>

        ) : (
           
        <main>
            
        <div className="country-details-container">
            <a href="#" className ="back-button" onClick={() => history.back()}>
                <i className="fa-solid fa-arrow-left"></i>&nbsp;  Back</a>
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
                    <p><b>Language: {countryData.languages} </b><span className="languages"></span></p>
                </div>
                { countryData.borders.lenght !== 0 &&  <div className="border-countries">
                    <b>Border Countries: </b>&nbsp; 
                   {
                    countryData.borders.map((border) => <Link key={border} to={`/${border}`} >{border}</Link>)
                   }
                </div>}
            </div>
        </div>
        </div>
     </main>
     
        )
    ) 

    
}