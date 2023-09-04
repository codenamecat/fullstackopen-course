import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getPeople = () => {
    const request = axios.get(baseUrl)
    return request.then(res => res.data)
}

const createNew = newPerson => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(res => res.data)
}

const deletePerson = (idToDelete, nameToDelete) => {
    const confirmation = window.confirm(`Delete ${nameToDelete}?`)
    if (confirmation) {
        axios.delete(`${baseUrl}/${idToDelete}`)
    } 
}

const changePerson = (personToChange, newNumber) => {
    const confirmation = window.confirm(`${personToChange.name} is already added to the phonebook, replace the old number with a new one?`)
    if (confirmation) {
        const changedPerson = {...personToChange, number: newNumber}
        axios.put(`${baseUrl}/${personToChange.id}`, changedPerson)
    }
}

export default { getPeople, createNew, deletePerson, changePerson }