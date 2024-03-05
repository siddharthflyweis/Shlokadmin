import React from "react";
import deletebtn from "../Assets/Banners/deletebtn.svg";
import editbtn from "../Assets/Banners/editbtn.svg";
import download from "../Assets/allfiles/download.svg";
const Allfiles = () => {
  return (
    <>
      <div className="flex justify-between items-center pt-5 ml-5 mr-5">
        <div className="text-2xl mb-5 text-[black] font-semibold ">
          Upload files
          <br />
          <span className="text-[15px] text-[#525252]">
            Upload and view files
          </span>
        </div>
        <div className="flex">
          <div className="flex justify-center items-center gap-5">
            <button className="bg-[#0F2C64] p-2 pl-5 pr-5 rounded-3xl text-white">
              Upload a New file
            </button>
          </div>
        </div>
      </div>
      <div className="mt-5 ml-1 mr-1">
        <table className="w-full border-collapse border border-slate-400 ... ">
          <thead>
            <tr>
              <th className="w-[50px] text-[#6D6D6D] border border-slate-300 ... bg-[#F6F9FF]">
                <input type="checkbox" />
              </th>
              <th className="w-[200px] text-[#6D6D6D] border border-slate-300 ... bg-[#F6F9FF]">
                File Title
              </th>
              <th className="text-center text-[#6D6D6D] w-[300px] border border-slate-300 ... bg-[#F6F9FF]">
                File Type
              </th>
              <th className="w-[300px] text-center text-[#6D6D6D] border border-slate-300 ... bg-[#F6F9FF]">
                File Status
              </th>

              <th className="w-[200px] text-center text-[#6D6D6D] border border-slate-300 ... bg-[#F6F9FF]">
                Uploaded on
              </th>

              <th className="w-[150px] text-center text-[#6D6D6D] border border-slate-300 ... bg-[#F6F9FF]"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="text-center p-5 border border-slate-300 ... bg-[#F6F9FF]">
                <input type="checkbox" />
              </td>
              <td className="text-center p-5 border border-slate-300 ... bg-[#F6F9FF]"></td>
              <td className="w-[200px] text-center border border-slate-300 ... bg-[#F6F9FF]"></td>
              <td className="w-[200px] text-center border border-slate-300 ... bg-[#F6F9FF]"></td>

              <td className="w-[50px] text-center border border-slate-300 ... bg-[#F6F9FF]"></td>

              <td className="w-[50px] text-center border border-slate-300 ... bg-[#F6F9FF]">
                <span className="flex gap-2 justify-center">
                  <img src={download} alt="" />
                  <img src={deletebtn} alt="" />
                  <img src={editbtn} alt="" />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Allfiles;
