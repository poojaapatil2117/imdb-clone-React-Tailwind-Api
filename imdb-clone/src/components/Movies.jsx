import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination'

function Movies({handleAddtoWatchList,handleRemoveFromWatchList,watchlist}) {

  const [movies, setMovies] = useState([])
  const [pageNo, setPageNo] = useState(1)

  const handlePriv = ()=>{
    if(pageNo==1){

      setPageNo(1)
    }else{

      setPageNo(pageNo-1)
    }
  }

  const handleNext = ()=>{
    setPageNo(pageNo+1)

  }

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=aaed9c2a57ba42e816a3868d6d94df99&language=en-US&page=${pageNo}`).then(function(res){
      setMovies(res.data.results)
    })
  },[pageNo])  

  return (
    <div className='p-5'>
      <div className='text-2xl m-5 font-bold text-center'>
        Tending Movies
      </div>
      <div className='flex flex-row flex-wrap justify-around gap-8'>
         {movies.map((movieObj)=>{
          return <MovieCard movieObj={movieObj} key={movieObj.id} poster_path={movieObj.poster_path}  name={movieObj.original_title} handleAddtoWatchList={handleAddtoWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} watchlist={watchlist}/>
         })}
         
      </div>

      <Pagination handleNext={handleNext} handlePriv={handlePriv} pageNo={pageNo}/>
    </div>
  )
}

export default Movies

// https://api.themoviedb.org/3/movie/popular?api_key=aaed9c2a57ba42e816a3868d6d94df99&language=en-US&page=1
