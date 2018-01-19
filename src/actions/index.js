import axios from 'axios';
const API_KEY = '75f5713d20ce25ce0c1f1049a574c163';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
//application state only changes with actions and reducers
export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  //action creator
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
