import React from "react";
import deletebtn from "../Assets/dltbtn.svg";
import { FaSearch } from "react-icons/fa";
import edit from "../Assets/edit.svg";
import property from "../Assets/department/property.svg";
import corporate from "../Assets/department/corporate.svg";
import civil from "../Assets/department/civil.svg";
import criminal from "../Assets/department/criminal.svg";
const Services = () => {
  return (
    <div className="h-[600px]">
      <div className="flex justify-between items-center pt-5 ml-5 mr-5">
        <div className="text-2xl mb-5 text-[black] font-semibold ">
          Services
        </div>
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
                placeholder="Search Service"
              />
            </div>

            <button className="bg-[#0F2C64] p-1 pl-3 pr-3 rounded text-white">
              Create Service
            </button>
          </div>
          <div className="flex justify-center items-center gap-3">
            <div>
              <img src={deletebtn} alt="" />
            </div>
            <div>
              <img src={edit} alt="" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-end gap-2 items-center mt-3">
        <input type="checkbox" className="w-[18px] h-[18px]" />
        <label className="text-[#6D6D6D]">Select All</label>
      </div>

      <div className="flex flex-wrap gap-10 mt-10 ml-10">
        <div className="cursor-pointer">
          <div className="shadow-lg w-[180px] h-[180px] rounded flex flex-col justify-center items-center">
            <div>
              <img src={property} alt="" />
            </div>
            <div className="flex justify-center mt-5 text-black font-semibold">
              Property Lawyer
            </div>
          </div>
        </div>

        <div className="cursor-pointer">
          <div className="shadow-lg w-[180px] h-[180px] rounded flex flex-col justify-center items-center">
            <div>
              <img src={criminal} alt="" />
            </div>
            <div className="flex justify-center mt-5 text-black font-semibold">
              Criminal Lawyer
            </div>
          </div>
        </div>
        <div className="cursor-pointer">
          <div className="shadow-lg w-[180px] h-[180px] rounded flex flex-col justify-center items-center">
            <div>
              <img src={property} alt="" />
            </div>
            <div className="flex justify-center mt-5 text-black font-semibold">
              Tax Lawyer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
