import { useState, useEffect } from 'react'
import peopleService from './services/people'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [notifMessage, setNotifMessage] = useState('')

  useEffect(() => {
    peopleService
      .getPeople()
      .then(initialPeople => {
        setPersons(initialPeople)
      })
  }, [persons])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()

    const newPerson = { name: newName, number: newNumber }
    const existingPerson = persons.find(person => person.name === newName)

    if (existingPerson) {
      peopleService.changePerson(existingPerson, newNumber)

      setNotifMessage(`Changed the number for ${existingPerson.name}`)
      setTimeout(() => {
        setNotifMessage(null)
      }, 4000)

      setNewName('')
      setNewNumber('')
    } else {
      peopleService
        .createNew(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))

          setNotifMessage(`Added ${newPerson.name}`)
          setTimeout(() => {
            setNotifMessage(null)
          }, 4000)

          setNewName('')
          setNewNumber('')
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notifMessage} />
      <SearchPerson search={search} handleChange={handleSearchChange} />
      <h2>Add new person</h2>
      <AddPerson newName={newName} newNumber={newNumber} handleSubmit={addName} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <NumberList persons={persons} search={search} changeMessage={setNotifMessage} />
    </div>
  )
}

const SearchPerson = (props) => {
  return (
    <div>
      search: <input value={props.search} onChange={props.handleChange} />
    </div>
  )
}

const AddPerson = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        name: <input value={props.newName} onChange={props.handleNameChange} />
      </div>
      <div>
        number: <input value={props.newNumber} onChange={props.handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const NumberList = ({ persons, search, changeMessage }) => {

  const personElements = persons.filter(person => person.name.toLowerCase().startsWith(search.toLowerCase())).map(person => <Number person={person} key={person.name} changeMessage={changeMessage} />)

  return <ul>{personElements.length > 0 ? personElements : <div>No people found</div>}</ul>
}

const Number = ({ person, changeMessage }) => {

  const deleteNumber = (id, name) => {
    const confirmation = window.confirm(`Delete ${name}?`)

    if (confirmation) {
      peopleService.deletePerson(id)

      changeMessage(`Deleted ${name}`)
      setTimeout(() => {
        changeMessage(null)
      }, 4000)
    }

  }

  return <li>{person.name} {person.number} <button onClick={() => deleteNumber(person.id, person.name)}>Delete</button></li>
}

const Notification = ({ message }) => {

  const notificationStyle = {
    backgroundColor: 'lightgreen',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  }

  if (message === null) {
    return null
  } else {
    return (
      <div style={notificationStyle}>{message}</div>
    )
  }
}

export default App