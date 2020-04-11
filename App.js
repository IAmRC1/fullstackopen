import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040123456' },
    { name: 'Ada Lovelace', number: '39445323523' },
    { name: 'Dan Abramov', number: '1243234345' },
    { name: 'Mary Poppendieck', number: '39236423122' }
	])
	let filteredPersons = []
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNum] = useState('')
	const [filterName, setFilterName] = useState('')
	
	const addName = (e) => {
		e.preventDefault()
		const newPerson = { name: newName, number: newNumber }
		if (persons.findIndex(person => {
				return ((JSON.stringify(person.name).toLowerCase() === JSON.stringify(newPerson.name).toLowerCase()) || (person.number === newPerson.number)) 
			}) < 0) {
			setPersons(persons.concat(newPerson))
			setNewName('')
			setNewNum('')
		} else {
			alert(`${newPerson.name} is already added to phonebook`)
			setNewName('')
			setNewNum('')
		}
	}

	const handleChangeName = (e) => {setNewName(e.target.value)}
	const handleChangeNum = (e) => {setNewNum(e.target.value)}
	const handleFilter = (e) => {setFilterName(e.target.value)}
	
	filteredPersons = filterName === '' ? persons : persons.filter(person => JSON.stringify(person.name).toLowerCase().includes(filterName.toLowerCase()))

	return ( 
		<div>
			<h1>Phonebook</h1>
			<Filter filterName={filterName} handleFilter={handleFilter} />
			<h2>Add a new-</h2>
			<PersonForm
				addName={addName}
				newName={newName}
				newNumber={newNumber}
				handleChangeName={handleChangeName}
				handleChangeNum={handleChangeNum} /> 
			<h2>Numbers-</h2> 
			<Persons filteredPersons={filteredPersons} />
		</div>
	)
}

export default App