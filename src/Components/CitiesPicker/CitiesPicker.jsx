import React,{useState,useEffect} from "react"
import {NativeSelect, FormControl} from "@material-ui/core"
import {fetchCities} from "../../api/fetchCities"
import styles from './CitiesPicker.module.css'

const CitiesPicker = ({handleCityChange}) => {
    const [fetchedCities, setFetchedCities] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCities(await fetchCities())
        }
        fetchAPI()
    },[setFetchedCities])

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCityChange(e.target.value)}>
                <option value="Niamey">Niamey</option>
                {fetchedCities.map((city,i) => <option key={i} value={city}>{city}</option>)}
            </NativeSelect> 
        </FormControl>
    )
}

export default CitiesPicker