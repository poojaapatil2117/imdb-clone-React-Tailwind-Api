import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons"; // Example icon
import genreids from "../Utility/genre";
import { text } from "@fortawesome/fontawesome-svg-core";
function WatchList({ watchlist, setWatchlist,handleRemoveFromWatchList }) {
  const [search, setSearch] = useState("");
 
  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter = (genre)=>{
    setCurrGenre(genre)
  }

  const [genreList, setGenreList] = useState(['All Genres']);
  const [currGenre,setCurrGenre] = useState('All Genres')
  let sortIncreasing = () => {
    let sortedIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });

    setWatchlist([...sortedIncreasing]);
  };

  let sortDescreasing = () => {
    let sortedDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchlist([...sortedDecreasing]);
  };

  useEffect(() => {
    let tmp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });

    tmp = new Set(tmp)
    console.log(tmp);
    setGenreList(['All Genres', ...tmp]);
  }, [watchlist]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4 gap-4">
        {genreList.map((genre)=>{
         return <div onClick={()=>handleFilter(genre)} className={currGenre==genre? "flex justify-center bg-blue-400  h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center":"flex justify-center bg-gray-400  h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center"}>
          {genre}
        </div>
        })}
       
        
        
      </div>

      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          name=""
          placeholder="search Movies"
          id=""
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center ">
          <thead className="border-b-1">
            <tr>
              <th>Name</th>
              <th className="flex gap-5 justify-center">
                <div onClick={sortIncreasing}>
                  <FontAwesomeIcon icon={faArrowUp} />
                </div>
                Ratings
                <div onClick={sortDescreasing}>
                  <FontAwesomeIcon icon={faArrowDown} />
                </div>
              </th>

              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.filter((movieObj)=>{
                  if(currGenre=='All Genres'){
                    return true

                  }else{
                    return genreids[movieObj.genre_ids[0]]==currGenre
                  }
            }).filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr key={movieObj.id} className="order-gray-200 border-b-1">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[6rem] w-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                        alt=""
                      />

                      <div className="mx-10">{movieObj.title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>
                    <td className="text-red-500 hover:cursor-pointer" onClick={()=>handleRemoveFromWatchList(movieObj)}>Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
