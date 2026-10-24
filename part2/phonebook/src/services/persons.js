import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'
const getAllPersonNumber = () => {
    const request = axios.get(baseUrl)
    return request.then(response => {
        return response.data
    })
}

const addPersonNumber = (newPersonNumber) => {
    const request = axios.post(baseUrl, newPersonNumber)
    return request.then(response => {
        return response.data
    })
}


export default {getAllPersonNumber, addPersonNumber}