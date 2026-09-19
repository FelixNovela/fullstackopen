import { useState } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNUmber, setNewNumber] = useState('')
  const [filterPerson, setfilterPerson] = useState("")

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

  const handleFilter = (event) => {
    setfilterPerson(event.target.value)
  }

  let personsToShow = !filterPerson ? persons : persons.filter(person => person.name.toLowerCase().includes(filterPerson.toLowerCase()))


  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filterPersonValue={filterPerson} handleFilter={handleFilter} />
      <PersonForm onSubmit={handlePerson} onChangeName={handleNewName} onChangeNumber={handleNewNumber}
        valueName={newName} valueNumber={newNUmber} />

      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />

    </div>
  )
}

export default App