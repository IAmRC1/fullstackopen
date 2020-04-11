import React from 'react'

const PersonForm = (props) => {
  const { addName, newName, newNumber, handleChangeName, handleChangeNum } = props;
  return (
    <form onSubmit={addName} >
				<div>
					<label>
						name: 
						<input type="text" 
							value={newName} 
							onChange={handleChangeName} 
							required /> 
					</label> 
				</div> 
				<div>
					<label>
						number:
						<input type="number" 
							value={newNumber} 
							onChange={handleChangeNum} 
							required /> 
					</label> 
				</div>
				<button type="submit">add</button> 
			</form>
  )
}

export default PersonForm
