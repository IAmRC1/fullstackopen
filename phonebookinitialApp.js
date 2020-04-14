import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNum ] = useState('')
  const [ filterName, setFilterName ] = useState('')
  
  const handleChangeName = (e) => {
    setNewName(e.target.value)
  }

  const handleChangeNum = (e) => {
    setNewNum(e.target.value)
  }

  const handleFilter = e => {
    setFilterName(e.target.value)
  }
  const filteredPersons = filterName === '' ? persons : persons.filter(person => (person.name.toLowerCase()).includes(filterName.toLowerCase()));


  // polyfill for startcase string
  const titleCase = (str) => {
    return str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }
  //
  const addPerson = e => {
    e.preventDefault();
    const personObject = {
      name: titleCase(newName),
      number: newNumber
    }
    let key = persons.findIndex(person => JSON.stringify(person.name).toLowerCase() === JSON.stringify(personObject.name).toLowerCase())
    if(key>=0){
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      return setNewNum('')
    }
    else{
      setPersons(persons.concat(personObject))
      setNewName('')
      return setNewNum('')
    }
   
  }



  

  return (
      <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} handleFilter={handleFilter} />
      <br/>
      <PersonForm 
        addPerson={addPerson} 
        newName={newName} 
        newNumber={newNumber} 
        handleChangeName={handleChangeName} 
        handleChangeNum={handleChangeNum} 
      />
      <h2>Names</h2>
      <Persons filteredPersons={filteredPersons} />
      </div>
  )
}
export default App
