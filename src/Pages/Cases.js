import { FaSearch } from "react-icons/fa";
import deletebtn from "../Assets/Banners/deletebtn.svg";
import editbtn from "../Assets/Banners/editbtn.svg";
import download from "../Assets/allfiles/download.svg";
import userimage from "..//Assets/userimage.svg";
const Cases = () => {
  return (
    <>
      <div className="flex justify-between items-center pt-5 ml-5 mr-5">
        <div className="text-2xl mb-5 text-[black] font-semibold ">
          All Cases
          <br />
          <span className="text-[15px] text-[#525252]">
            Add and view legal cases
          </span>
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
                placeholder="Search Cases"
              />
            </div>

            <button className="bg-[#0F2C64] p-2 pl-5 pr-5 rounded-3xl text-white">
              Add New Case
            </button>
          </div>
        </div>
      </div>

      <hr />
      <div className="flex gap-10 ml-8 mt-3 mb-3">
        <div className="cursor-pointer">All Cases</div>
        <div className="cursor-pointer">Old Cases</div>
        <div className="cursor-pointer">New Cases</div>
        <div className="cursor-pointer">Judgement Cases</div>
        <div className="cursor-pointer">Closed Cases</div>
      </div>
      <hr />
      <div className="mt-5 ml-1 mr-1">
        <table className="w-full border-collapse border border-slate-400 ... ">
          <thead>
            <tr>
              <th className="w-[50px] text-[#6D6D6D] border border-slate-300 ... bg-[#F6F9FF]"></th>
              <th className="w-[200px] text-[#6D6D6D] border border-slate-300 ... bg-[#F6F9FF]">
                Cases Title
              </th>
              <th className="text-center text-[#6D6D6D] w-[300px] border border-slate-300 ... bg-[#F6F9FF]">
                Case Category
              </th>
              <th className="w-[200px] text-center text-[#6D6D6D] border border-slate-300 ... bg-[#F6F9FF]">
                Court Category
              </th>

              <th className="w-[300px] text-center text-[#6D6D6D] border border-slate-300 ... bg-[#F6F9FF]">
                Consultant by
              </th>

              <th className="w-[150px] text-center text-[#6D6D6D] border border-slate-300 ... bg-[#F6F9FF]"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="text-center p-5 border border-slate-300 ... bg-[#F6F9FF]">
                <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  New
                </span>
              </td>
              <td className="text-center p-5 border border-slate-300 ...  bg-[#F6F9FF]">
                {" "}
                lorem iporem
              </td>
              <td className="w-[200px] text-center  bg-[#F6F9FF]">
                {" "}
                marrieage lawyer
              </td>
              <td className="w-[200px] text-center bg-[#F6F9FF]">
                {" "}
                lorem iporem
              </td>

              <td className="w-[50px] text-center bg-[#F6F9FF]">
                <div className="flex justify-center items-center gap-2">
                  <img src={userimage} alt="" />
                  Advocate lorem iporem
                </div>
              </td>

              <td className="w-[50px] text-center  bg-[#F6F9FF]">
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

export default Cases;
