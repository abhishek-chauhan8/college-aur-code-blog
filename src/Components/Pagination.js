import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className=" flex justify-evenly  items-center shadow shadow-t-md shadow-black py-2 fixed bottom-0 left-0 w-full bg-white ">
      <div className="flex gap-10">
        {page > 1 && (
          <button onClick={() => handlePageChange(page - 1)}
          className="border-[2px] border-gray-300  py-2 px-3 rounded-md text-base">Previous</button>
        )}

        {page < totalPages && (
          <button onClick={() => handlePageChange(page + 1)}
          className="border-[2px] border-gray-300  py-2 px-6 rounded-md text-base">Next</button>
        )}

      </div>
        <p>
          Page {page} of {totalPages}
        </p>
    </div>
  );
};

export default Pagination;
