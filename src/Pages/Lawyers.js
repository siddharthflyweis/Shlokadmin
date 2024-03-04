
import { FaSearch } from "react-icons/fa";
import dltbtn from "../Assets/dltbtn.svg";
import edit from "../Assets/edit.svg";
import userimage from "..//Assets/userimage.svg";
const Lawyers = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="text-3xl font-semibold">Lawyers</div>
        <div>
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
                placeholder="Search Lawyer"
              />
            </div>

            <button className="bg-[#0F2C64] p-2 pl-5 pr-5 rounded-3xl text-white">
              Add New Lawyer
            </button>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 mb-[200px] mt-5 p-5">
        <table className="w-full">
          <thead>
            <tr>
              <th className="w-[50px] text-left text-[#6D6D6D]"></th>
              <th className="w-[200px] text-left text-[#6D6D6D]">
                Lawyer Name
              </th>
              <th className="text-left text-[#6D6D6D] w-[200px]">Email</th>
              <th className="w-[150px] text-left text-[#6D6D6D]">Phone no.</th>
              <th className=" w-[200px] text-center text-[#6D6D6D]">
                Total Consultations
              </th>

              <th className="w-[200px] text-center text-[#6D6D6D]">Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="shadow-lg bg-[white]">
              <td className="text-left">
                <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  New
                </span>
              </td>
              <td className="text-left">
                <div className="flex items-center gap-2">
                  <img src={userimage} alt="" />
                  john
                </div>
              </td>
              <td className="w-[200px] text-left">abcd@gmail.com</td>

              <td className="w-[150px] text-left">122332650</td>
              <td className="w-[50px] text-center">21</td>
              <td className=" text-center ">
                <span className="bg-[#D8E3FF] text-[#094DB3] rounded-2xl p-2">
                  pending
                </span>
              </td>
              <td className="w-[50px] text-center text-[#094DB3] flex">
                <img src={dltbtn} alt="" />
                <img src={edit} alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Lawyers;
