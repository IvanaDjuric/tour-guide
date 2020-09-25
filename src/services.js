import axios from 'axios'

export const getAllCities = () => {
    return axios.get('http://localhost:3005/cities')
}

