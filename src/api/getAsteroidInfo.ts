import { API, randomApi } from "../utils/urls";
import { API_KEY, DEMO_KEY } from "../utils/apiKey";


export function getAsteroidInfo(id: string, setData: any): void {
    fetch(`${API}${id}?api_key=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err))
}

export function getRandomAsteroidInfo(date: string, setData: any): void {
    fetch(`${randomApi}?start_date=${date}&api_key=${DEMO_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            const obj = Object.keys(data?.near_earth_objects)[0]
            setData(data?.near_earth_objects[obj][0])
        })
        .catch((err) => console.log(err))
}