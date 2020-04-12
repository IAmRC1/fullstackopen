import React from 'react'

const Country = (props) => {
  const { country } = props;
  return (
    <li>{country.name}</li>
  )
}

export default Country