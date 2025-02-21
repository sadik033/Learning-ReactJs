import React, { useContext, useEffect } from "react";
import { useState } from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Home(){
    const [query, setQuery] = useState('')
    const a = useContext(ThemeContext)
    
    
    return(
        <main>
        <div className='search-filter-container'>
        <SearchBar setQuery={setQuery} />
        <SelectMenu  setQuery={setQuery} />
        </div>
        <CountriesList query={query} />
        </main>
    )
}