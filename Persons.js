import React from 'react'

const Persons = (props) => {
  const { filteredPersons } = props;
  return (
    filteredPersons.map((person,i) =>
      <p key={`${person}-${i}`}>{person.name} : {person.number}</p>
    )
  )
}

export default Persons
