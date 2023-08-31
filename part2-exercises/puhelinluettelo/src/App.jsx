import { useState, useEffect } from 'react'
import peopleService from './services/people'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    peopleService
      .getPeople()
      .then(initialPeople => {
        setPersons(initialPeople)
      })
  }, [])

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
      alert(`${newName} is already added to the phonebook`)
    } else {
      peopleService
        .createNew(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchPerson search={search} handleChange={handleSearchChange} />
      <h2>Add new person</h2>
      <AddPerson newName={newName} newNumber={newNumber} handleSubmit={addName} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <NumberList persons={persons} search={search} />
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

const NumberList = ({ persons, search }) => {

  const personElements = persons.filter(person => person.name.toLowerCase().startsWith(search.toLowerCase())).map(person => <Number person={person} key={person.name} />)

  return <ul>{personElements.length > 0 ? personElements : <div>No people found</div>}</ul>
}

const Number = ({ person }) => {
  return <li>{person.name} {person.number}</li>
}

export default App