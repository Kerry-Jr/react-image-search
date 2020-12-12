import axios from 'axios'


export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
       'Client-ID **get your own key from unsplash.com/developer'
  }
})
