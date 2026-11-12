
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import Country from "./Country"

const App = () => {
  const [searchCountry, setSearchCountry] = useState('')
  const [countryList, setCountryList] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)

  const handleSearchChange = (event) => {
    setSearchCountry(event.target.value)
    setSelectedCountry(null)
  }

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountryList(response.data)
      })
  }, [])

  let searchResults = (
    <div>
      <p>Type a country name to start searching</p>
    </div>
  )

  const handleShowCountryDetails = (c) => {
    setSelectedCountry(c)
  }
  const countriesToShow = searchCountry ? countryList.filter(c => c.name.common.toLowerCase().includes(searchCountry.toLowerCase())) : []
  const countryToDisplay = countriesToShow.length === 1 ? countriesToShow[0] : selectedCountry

  if (countriesToShow.length > 10) {
    searchResults = (
      <div>
        Too many matches, specify another filter
      </div>
    )
  } else if (countriesToShow.length > 1) {
    searchResults = (
      <div>
        {countriesToShow.map(c =>
          <li key={c.cca3}>
            {c.name.common} <button onClick={() => handleShowCountryDetails(c)}>Show</button>
          </li>

        )}
      </div>
    )

  }

  return (
    <div>
      <label htmlFor="search">Find countries</label> <input type="text" value={searchCountry} id="search" onChange={handleSearchChange} />
      {searchResults}
      <Country countryToDisplay={countryToDisplay} />
    </div>
  )
}

export default App
