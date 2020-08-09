import axios from "axios"

const url = 'https://restcountries.eu/rest/v2/all'

export const fetchCities = async () => {
    try {
        const { data  } = await axios.get(`${url}`)
        const filteredEmptyCapital = data.filter(({capital}) => capital.length > 0)
        const capitals = filteredEmptyCapital.map(({capital}) => capital)
        console.log(capitals)
        return capitals
    } catch(error) {
        console.log(error)
    }
}

export default fetchCities