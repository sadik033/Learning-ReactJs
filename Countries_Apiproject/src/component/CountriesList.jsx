import React, { useEffect, useState } from "react";
// import CountriesData from "../../CountriesData";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./countriesListShimmer";


export default function CountriesList({query}) {

 
  const [CountriesData, setCountriesData] = useState([])

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) =>{
        setCountriesData(data)
      })
  },[])

  if( CountriesData.length === 0 ){
    return <CountriesListShimmer/>
  }

  return (
    <>
    <div className="countries-container">{
    CountriesData.filter((country) => 
    country.name.common.toLowerCase().includes(query) ).map( (country) => {
    
      return (
        
      <CountryCard
        key= {country.name.common}
        name={country.name.common}
        flag={country.flags.svg}
        population ={country.population.toLocaleString('en-IN')}
        region= {country.region}
        capital = {country.capital?.[0]}
        data ={country}
        />
      )
    })
    
    }
  </div>
  </>
)
}
