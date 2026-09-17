import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number: "040-1234567" }
  ])
  const [newName, setNewName] = useState('')
  const [newNUmber, setNewNumber] = useState('')

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handlePerson = (event) => {
    event.preventDefault()
    let personExist = persons.find(person => person.name === newName)
    if (!personExist) {
      setPersons(persons.concat({ id: String(persons.length + 1), name: newName, number: newNUmber }))
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${newName} is already added to phonebook`)
    }

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handlePerson}>
        <div>
           <div>name: <input value={newName} onChange={handleNewName} /></div>
          <div>number: <input value={newNUmber} onChange={handleNewNumber} /></div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.id} ><b>{person.name} {person.number}</b></p>)}
    </div>
  )
}

export default App