import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import servicePersonNumber from './services/persons'
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNUmber, setNewNumber] = useState('')
  const [filterPerson, setfilterPerson] = useState("")

  useEffect(() => {
    servicePersonNumber.getAllPersonNumber()
      .then(initialPersonsNumbers => {
        setPersons(initialPersonsNumbers)
      })
  }, [])

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
      const newPersonNumber = {
        name: newName, number: newNUmber
      }
      servicePersonNumber.addPersonNumber(newPersonNumber)
        .then(addedPersonNumber => {
          setPersons(persons.concat(addedPersonNumber))

        })
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