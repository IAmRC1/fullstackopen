import React from 'react'

const Persons = (props) => {
  const { filteredPersons, deletePerson } = props;
  return (
    <table>
      <tbody>
      {filteredPersons.map((person,i) => person.id && 
        <tr key={`${person}-${i}`}>
          <td>{person.name}</td>
          <td>{person.number}</td>
          <td><button onClick={() => deletePerson({id : person.id, name: person.name})}>delete</button></td>
        </tr>)}
      </tbody>
    </table>
  )
}

export default Persons