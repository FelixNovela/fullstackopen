const Country = ({countryToDisplay}) => {
    if (countryToDisplay) {
        let countryLanguages = "No languages listed"
        if (Object.keys(countryToDisplay.languages ?? {}).length > 0) {
            countryLanguages = Object.entries(countryToDisplay.languages).map(([property, valueData]) => {

                return <li key={property}>{valueData}</li>
            });
        }
        return (
            <div>
                <h1>{countryToDisplay.name.common}</h1>
                <p>Capital {countryToDisplay.capital ? countryToDisplay.capital.join(', ') : "No capital"}</p>
                <p>Area {countryToDisplay.area ? countryToDisplay.area : "No area"}</p>
                <h2>Languages</h2>
                <ul>
                    {
                        countryLanguages
                    }
                </ul>
                <img width={200} height={200} src={countryToDisplay.flags.png} alt={`Flag of ${countryToDisplay.name.common}`} />

            </div>
        )
    }
    return (
        null
    )
}

export default Country