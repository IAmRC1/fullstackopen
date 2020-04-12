import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'
import SingleCountry from './components/SingleCountry'

const App = () => {
	const [name, setName] = useState('')
	const [countries, setCountries] = useState([])
	const [weather, setWeather] = useState()
	const hook = () => {
		axios
			.get('https://restcountries.eu/rest/v2/all')
			.then(response => {
				setCountries(response.data)
			})
	}
	useEffect(hook, [])

	const params = {
		access_key : process.env.REACT_APP_API_KEY,
		query: `${name}`
	}
	const temp = () => {
		axios
			.get('http://api.weatherstack.com/current', {params})
			.then(response => {
				setWeather(response.data)
			})
			.catch(error => console.log('error', error))
	}
	useEffect(temp, [name])

	
	const handleName = (e) => {setName(e.target.value)}

	let filteredCountries = name === '' ? countries : countries.filter(country => JSON.stringify(country.name).toLowerCase().includes(name.toLowerCase()))
	
	return (
		<div>
			<h1>Countries</h1>
			<label>
				find countries: 
				<input type="text" 
					value={name} 
					onChange={handleName} 
					required /> 
			</label>
			{filteredCountries.length > 1 
				? ((filteredCountries.length > 10 && name.length > 0) 
						? <ul>
								<li>Too many matches, specify another filter</li>
							</ul>
						: <ul>
								{filteredCountries.map((country, i) => 
									<Country key={i} country={country} />
								)}
							</ul>
					)
				:	filteredCountries.map((country, i) => <SingleCountry key={i} country={country} weather={weather} />)}
		</div>
	)
}

export default App