import axios from "axios"

const BASE_URL='https://places.googleapis.com/v1/places:searchText'

const globalConfig = {
    headers: {
        'Context-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-Goog-Api-Key': import.meta.env.VITE_GOOGLE_PLACE_API_KEY,
        'X-Goog-FieldMask': [
            'places.photos',
            'places.googleMapsLinks',
            'places.displayName',
            'places.id'
        ]
    }
}

export const GetPlaceDetails = (data) => axios.post(BASE_URL, data, globalConfig);