import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handlePerson = (event) => {
    event.preventDefault()
    let personExist = persons.find(person => person.name === newName)
    if(!personExist){
      setPersons(persons.concat({id: String(persons.length + 1),name: newName}))
    setNewName('')
    }else{
      alert(`${newName} is already added to phonebook`)
    }
    
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handlePerson}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person => <p key={person.id} >{person.name}</p>)}
    </div>
  )
}

export default App