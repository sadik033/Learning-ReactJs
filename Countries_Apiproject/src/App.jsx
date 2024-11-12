import { useState } from 'react'
import './App.css'
import Header from './component/header'
import SearchBar from './component/SearchBar'
import SelectMenu from './component/SelectMenu'
import CountriesList from './component/CountriesList'



const App = () => {
  const [query, setQuery] = useState('')
  return (
    <>
    <Header/>
    <main>
    <div className='search-filter-container'>
    <SearchBar setQuery={setQuery} />
    <SelectMenu/>
    </div>
    <CountriesList query={query} />
    </main>
    </>
  )
}

export default App
