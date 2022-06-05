import axios from 'axios'

const movieDB = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    params: {
        api_key: "6ab494c2cd7ad2bd6aaa3b4838d81207",
        language: "en-US"
    }
})

export default movieDB;

