import React from "react";

function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[80vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1556582040238-PTQ8EP4WMQH73IU2G7K7/image-asset.jpeg)`,
      }}
    >

        <div className="text-white w-full text-center bg-gray-900/60 font-bold text-2xl">
            Avengers
        </div>
    </div>
  );
}

export default Banner;
