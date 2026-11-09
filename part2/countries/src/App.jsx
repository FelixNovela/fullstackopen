
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"


const App = () => {
  const [searchCountry, setSearchCountry] = useState('')
  const [countryList, setCountryList] = useState([])

  const handleSearchChange = (event) => {
    setSearchCountry(event.target.value)
  }

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountryList(response.data)
      })
  }, [])

  let message = (
    <div>
      <p>Type a country name to start searching</p>
    </div>
  )
  const countriesToShow = searchCountry ? countryList.filter(c => c.name.common.toLowerCase().includes(searchCountry.toLowerCase())) : []
  if (countriesToShow.length !== 0) {
    if (countriesToShow.length > 10) {
      message = (
        <div>
          Too many matches, specify another filter
        </div>
      )
    } else {
      if (countriesToShow.length > 1) {
        message = (
          <div>
            {countriesToShow.map((c, index) =>
              <li key={index}>
                {c.name.common}
              </li>

            )}
          </div>
        )
      } else {
        const country = countriesToShow.at(-1)


        let countryLanguages = "No languages listed"
        if (Object.keys(country.languages).length > 0) {
          countryLanguages = Object.entries(country.languages).map(([property, valueData]) => {

            return <li key={property}>{valueData}</li> 
          });
        }

       
        message = (
          <div>
            <h1>{country.name.common}</h1>
            <p>Capital {country.capital ? country.capital : "No capital"}</p>
            <p>Area {country.area ? country.area : "No area"}</p>
            <h2>Languages</h2>
            <ul>
              {
                countryLanguages
              }
            </ul>
            <img width={200} height={200} src={country.flags.png} alt={`Flag of ${country.name.common}`} />

          </div>
        )
      }

    }
  }
  return (
    <div>
      <label htmlFor="search">Find countries</label> <input type="text" value={searchCountry} id="search" onChange={handleSearchChange} />
      {message}
    </div>
  )
}

export default App
