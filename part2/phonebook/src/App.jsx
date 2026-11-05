import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import servicePersonNumber from './services/persons'
import Notification from './components/Notification'
import './index.css'
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNUmber, setNewNumber] = useState('')
  const [filterPerson, setfilterPerson] = useState("")
  const [confirmedMessage, setConfirmedMessage] = useState(null)

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
          setConfirmedMessage(`Added ${addedPersonNumber.name}`)
          setTimeout(() => {
            setConfirmedMessage(null)
          }, 5000)
        })
      setNewName('')
      setNewNumber('')
    } else {
      let confirm = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      if (confirm) {
        const updatePersonNumber = {
          name: newName, number: newNUmber
        }
        servicePersonNumber.updatePersonNumber(personExist.id, updatePersonNumber)
          .then(addedPersonNumber => {
            setPersons(persons.map(p => p.id === addedPersonNumber.id ? addedPersonNumber : p))

            setConfirmedMessage(`Updated ${addedPersonNumber.name}`)
            setTimeout(() => {
              setConfirmedMessage(null)
            }, 5000)
          })
        setNewName('')
        setNewNumber('')

      }

    }

  }

  const deletePerson = (idP) => {
    let personNameDelete = persons.find(p => p.id === idP)
    let confirm = window.confirm(`Delete ${personNameDelete.name} ?`)
    if (confirm) {
      servicePersonNumber.deletePersonNumber(idP)
        .then((deletedPersonId) => {
          setPersons(persons.filter(p => p.id !== deletedPersonId))
        })
        .catch(() => console.log('Error'))
    }
  }

  const handleFilter = (event) => {
    setfilterPerson(event.target.value)
  }

  let personsToShow = !filterPerson ? persons : persons.filter(person => person.name.toLowerCase().includes(filterPerson.toLowerCase()))


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={confirmedMessage} />
      <Filter filterPersonValue={filterPerson} handleFilter={handleFilter} />
      <PersonForm onSubmit={handlePerson} onChangeName={handleNewName} onChangeNumber={handleNewNumber}
        valueName={newName} valueNumber={newNUmber} />

      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} deletePerson={deletePerson} />

    </div>
  )
}

export default App