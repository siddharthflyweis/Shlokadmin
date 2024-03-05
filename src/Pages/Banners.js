import React from "react";
import bellicon from "../Assets/Banners/bellicon.svg";
import deletebtn from "../Assets/Banners/deletebtn.svg";
import editbtn from "../Assets/Banners/editbtn.svg";
const Banners = () => {
  return (
    <>
      <div className="flex justify-between items-center pt-5 ml-5 mr-5">
        <div className="text-2xl mb-5 text-[black] font-semibold ">Banners</div>
        <div className="flex">
          <div className="flex justify-center items-center gap-5">
            <button className="bg-[#0F2C64] p-2 pl-5 pr-5 rounded-3xl text-white">
              Create Banners +
            </button>
          </div>
        </div>
      </div>
      <div className="ml-5 mr-5 mt-5">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-t-2 border-b-2 m-5">
              <th className="text-center text-[#6D6D6D] w-[100px]">Banner</th>
              <th className="w-[100px] text-center text-[#6D6D6D]">Title</th>
              <th className="w-[150px] text-center text-[#6D6D6D]">Url Link</th>
              <th className="w-[150px] text-center text-[#6D6D6D]">
                Banner info
              </th>
            </tr>
          </thead>
          <tbody className="mt-4">
            <tr className="border-t-2 border-b-2 m-5">
              <td className="w-[100px] h-[100px] text-center p-2">
                <img src="" alt="" />
              </td>
              <td className="w-[100px]  text-center p-2">ewfw</td>
              <td className="w-[150px] text-center p-2">Loreum Ipsum</td>
              <td className="w-[200px] text-left p-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ut suscipit eros
              </td>
              <td className="w-[150px]">
                <span className="flex ml-20 gap-5">
                  <img src={bellicon} alt="" className="cursor-pointer" />
                  <img src={deletebtn} alt="" className="cursor-pointer" />
                  <img src={editbtn} alt="" className="cursor-pointer" />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Banners;
