import { useState } from 'react'
import './App.css'
import Header from './component/header'
import SearchBar from './component/SearchBar'
import SelectMenu from './component/SelectMenu'
import CountriesList from './component/CountriesList'



function App() {
  return (
    <>
    <Header/>
    <main>
    <div className='search-filter-container'>
    <SearchBar/>
    <SelectMenu/>
    </div>
    <CountriesList/>
    </main>
    </>
  )
}

export default App
