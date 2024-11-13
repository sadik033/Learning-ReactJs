import React, { useEffect, useState } from "react";
// import CountriesData from "../../CountriesData";
import CountryCard from "./CountryCard";


export default function CountriesList({query}) {

 
  const [CountriesData, setCountriesData] = useState([])
  const [count, setCount]= useState(0)

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) =>{
        setCountriesData(data)
      })
  },[])

  useEffect(()=>{
    console.log('Hiii')
  },[count])

  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=> setCount(count+1)} >Increse</button>
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
        />
      )
    })
    
    }
  </div>
  </>
)
}
