import React from 'react'

const SingleCountry = (props) => {
  console.log('props', props)
  const {country, weather} = props;
  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital: {country.capital}</p>
      <p>population: {country.population}</p>
      <h3>languages:</h3>
        {country.languages.map((lang, i) => 
          <p key={i}>{lang.name}</p>
        )}
      <h3>flag:</h3>
      <img src={country.flag} style={{border: '2px solid black'}} alt="flag" width="100" height="100" />
      <h3>weather in {country.name}:</h3>
      <p>temperature: {weather && weather.current && weather.current.temperature} Celcius</p>
      <img src={weather && weather.current && weather.current.weather_icons[0]} alt={weather} />
      <p>wind: {weather && weather.current && weather.current.wind_speed} mph direction {weather && weather.current && weather.current.wind_dir}</p>
    </div>
  )
}
 export default SingleCountry