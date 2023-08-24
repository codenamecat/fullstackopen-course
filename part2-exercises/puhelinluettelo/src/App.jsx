import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' },
    { name: 'Test Subject', number: '040-1111111'},
    { name: 'Your Name Here', number: '00000'},
    { name: 'This Guy', number: '12345'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

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

    const newPerson = {name: newName, number: newNumber}
    const existingPerson = persons.find(person => person.name === newName)

    if (existingPerson) {
      alert(`${newName} is already added to the phonebook`)
    } else {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('') // resetting the input fields
    }
  }

  const personElements = persons.filter(person => person.name.toLowerCase().startsWith(search.toLowerCase())).map(person => <li key={person.name}>{person.name} {person.number}</li>)

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        search: <input value={search} onChange={handleSearchChange} />
      </div>
      <h2>Add new person</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personElements}
      </ul>
      
    </div>
  )

}

export default App