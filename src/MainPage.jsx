import React, { useEffect } from 'react';
import { NavBar } from './NavBar';
import  { MovieList } from './MovieList'






export const MainPage = (props) => {

const [movies,setMovies] = React.useState([])
const [searchValue, setSearchValue] = React.useState ('')

const getMovieRequest = async () => {
  const url =  `http://www.omdbapi.com/?s=${searchValue}&apikey=f0261b3c`
  const response = await fetch(url)
  const responseJson = await response.json()
  if (responseJson.Search){
    setMovies (responseJson.Search)
  }
  
}
useEffect (()=>{
  getMovieRequest(searchValue)
}, [searchValue])

  return (
    <div>
     <NavBar searchValue = {searchValue} setSearchValue ={setSearchValue}/>
     <MovieList movies = {movies} />


    </div>
  )
}
