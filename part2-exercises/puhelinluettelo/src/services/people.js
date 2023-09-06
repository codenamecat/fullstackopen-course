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

const deletePerson = (idToDelete) => {
  axios.delete(`${baseUrl}/${idToDelete}`)
}

const changePerson = (personToChange, newNumber) => {
  const confirmation = window.confirm(`${personToChange.name} is already added to the phonebook, replace the old number with a new one?`)
  if (confirmation) {
    const changedPerson = { ...personToChange, number: newNumber }
    return axios.put(`${baseUrl}/${personToChange.id}`, changedPerson)
      .then(res => res.data)
      .catch(error => {
        // console.log(error)
        return error
      })
  }
}

export default { getPeople, createNew, deletePerson, changePerson }