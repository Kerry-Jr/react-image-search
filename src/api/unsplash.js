import axios from 'axios'
import apiKey from "../apiKey";


export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
       `Client-ID ${apiKey}`
    // Please go to unsplash.com/developer to get your own key!
  }
})
