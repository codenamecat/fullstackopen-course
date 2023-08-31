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

export default { getPeople, createNew }