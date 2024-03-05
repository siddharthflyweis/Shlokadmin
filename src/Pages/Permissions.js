import { FaSearch } from "react-icons/fa";
import userimage from "../Assets/userimage.svg";
import Permissionaction from "../Assets/permissionaction.svg";
const Permissions = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="text-3xl font-semibold">Permissions & Rolls</div>
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
                placeholder="Search Rolls"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 ml-1 mr-1">
        <table className="w-full ">
          <thead>
            <tr>
              <th className="w-[120px] text-left text-[#0F2C64]">Name</th>
              <th className="text-left text-[#0F2C64] w-[100px] ">Languages</th>
              <th className="w-[100px] text-left text-[#0F2C64] ">Tag</th>

              <th className="w-[400px] text-left text-[#0F2C64] ">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t-2 border-b-2">
              <td className="text-center flex items-center">
                <img src={userimage} alt="" />
                <div>
                  <div className="text-xl">siddharth</div>
                  <div className="text-[#0F2C64] text-[10px]">Real Estate</div>
                </div>
              </td>
              <td className=" text-leftborder ">Hindi, Gujrati</td>
              <td className="text-leftborder  ">Legal advisor</td>

              <td>
                <span className="flex gap-2">
                  <img src={Permissionaction} alt="" />{" "}
                  <img src={Permissionaction} alt="" />
                  <img src={Permissionaction} alt="" />{" "}
                  <img src={Permissionaction} alt="" />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Permissions;
