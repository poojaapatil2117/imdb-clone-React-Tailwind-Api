import React from "react";
import WatchList from "./WatchList";

function MovieCard({
  movieObj,
  poster_path,
  name,
  handleAddtoWatchList,
  handleRemoveFromWatchList,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className=" bg-cover bg-center bg-no-repeat bg-contain h-[40vh] w-[180px] bg-center bg-cover rounded-2xl hover:cursor-pointer flex flex-col hover:scale-110 duration-300 flex justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})
`,
      }}
    >
      {doesContain(movieObj) ? (
        <div    onClick={() => handleRemoveFromWatchList(movieObj)}         className="m-4 flex justify-center items-center rounded-large bg-gray-900/60 rounded-lg"
>&#10060;</div> 
      ) : (
        <div
          onClick={() => handleAddtoWatchList(movieObj)}
          className="m-4 flex justify-center items-center rounded-large bg-gray-900/60 rounded-lg"
        >
          &#128525;
        </div>
      )}

      <div className=" text-white text-l w-full p-2 text-center bg-gray-900/60 overflow-hidden rounded-2xl">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
