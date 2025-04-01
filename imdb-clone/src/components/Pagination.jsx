import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Example icon

function Pagination({handleNext,handlePriv, pageNo}) {
  return (
    <div className="bg-gray-400 p-4 mt-8 flex justify-center">
      <div className="flex">
     <div className="px-8 hover:cursor-pointer" onClick={handlePriv}> <FontAwesomeIcon icon={faArrowLeft} /></div>
       <div className="font-bold">{pageNo}</div>
      <div className="px-8 hover:cursor-pointer" onClick={handleNext}><FontAwesomeIcon icon={faArrowRight} /></div>
      </div>
    </div>
  );
}

export default Pagination;
