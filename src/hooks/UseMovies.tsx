import { useEffect, useState } from 'react';
import movieDB from '../api/MovieDB'
import { MovieDBResponse, Movie } from '../interfaces/movieInterface';

interface MoviesState {
    now_Playing: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}


export const UseMovies = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [moviesState, setMoviesState] = useState<MoviesState>({
        now_Playing: [],
        popular: [],
        topRated: [],
        upcoming: []
    })


    const getMovies = async () => {
        const now_PlayingPromise = movieDB.get<MovieDBResponse>("/now_playing");
        const top_RatedPromise = movieDB.get<MovieDBResponse>("/top_rated");
        const popularPromise = movieDB.get<MovieDBResponse>("/popular");
        const uPcomingPromise = movieDB.get<MovieDBResponse>("/upcoming");


        const response = await Promise.all([
            now_PlayingPromise,
            popularPromise,
            top_RatedPromise,
            uPcomingPromise]);

        setMoviesState({
            now_Playing: response[0].data.results,
            popular: response[1].data.results,
            topRated: response[2].data.results,
            upcoming: response[3].data.results
        })


        setIsLoading(false)
    }

    useEffect(() => {
        getMovies();
    }, [])

    return {
        ...moviesState,
        isLoading


    }

}
