import React from "react";
import { FaSearch } from "react-icons/fa";
import deletebtn from "../Assets/dltbtn.svg";
import edit from "../Assets/edit.svg";
const Cases = () => {
  return (
    <div className="flex justify-between items-center pt-5 ml-5 mr-5">
      <div className="text-2xl mb-5 text-[black] font-semibold ">All Cases</div>
      <div className="flex">
        <div className="flex justify-center items-center gap-5">
          <div className="relative mt-2 rounded-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="bg-[#0F2C64] p-2.5  ml-[-3px] rounded-l-full text-white">
                <FaSearch />
              </span>
            </div>
            <input
              type="text"
              className="placeholder: ml-2 block w-[250px] rounded-3xl border-0 py-1.5 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Search Cases"
            />
          </div>

          <button className="bg-[#0F2C64] p-2 pl-5 pr-5 rounded text-white">
            Add New Case
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cases;
