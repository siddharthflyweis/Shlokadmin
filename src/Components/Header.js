import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import userprofile from "../Assets/Header/userprofile.svg";
import history from "../Assets/Header/history.svg";
import filter from "../Assets/Header/filter.svg";
import setting from "../Assets/Header/setting.svg";
import privacy from "../Assets/Header/privacy.svg"
import term from "../Assets/Header/term.svg"
import complaint from "../Assets/Header/complaint.svg"
import logout from "../Assets/Header/logout.svg"
import help from "../Assets/Header/help.svg"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");

    navigate("/");
  };
  return (
    <div className="bg-[white]  h-[100px]  mt-5 flex flex-col shadow-lg ">
      <div className="flex justify-between items-center mt-7 mr-5">
        <div className="ml-10 flex justify-center items-center gap-2 ">
          <img src={userprofile} alt="" />
          <span className="font-bold">
            Mr Admin
            <br />
            <span className="text-[#808080]">lorem lorem</span>
          </span>
        </div>

        <div className="flex justify-center items-center gap-10">
          <div className="relative mt-2 rounded-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="bg-[#0F2C64] p-2  rounded-tl rounded-bl text-white">
                <FaSearch />
              </span>
            </div>
            <input
              type="text"
              className="placeholder: ml-2 block w-[350px] rounded-md border-0 py-1.5 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Search in admin panel"
            />
          </div>
          <div>
            <div className="flex justify-center items-center gap-4">
              <div className="relative">
                <span onClick={toggleDropdown} className="cursor-pointer">
                  <img src={setting} alt="filter" />
                </span>
                {isOpen && (
                  <div className="absolute mt-2 ml-[-100px] w-[200px] bg-white rounded-md shadow-lg z-10">
                    <span className="flex justify-end m-3">
                      <IoCloseSharp
                        size={25}
                        onClick={toggleDropdown}
                        className="cursor-pointer animate-bounce"
                      />
                    </span>

                    <ul>
                      <li className="p-2 hover:bg-[#0F2C64] hover:text-[white] cursor-pointer flex gap-2">
                        <img src={privacy} alt="" />
                        Privacy Policy
                      </li>
                      <li className="p-2 hover:bg-[#0F2C64] hover:text-[white] cursor-pointer flex gap-1">
                        <img src={term} alt="" />
                        Terms & Conditinos
                      </li>
                      <li className="p-2 hover:bg-[#0F2C64] hover:text-[white] cursor-pointer flex gap-2">
                        <img src={help} alt="" />
                        Help & Support
                      </li>
                      <li className="p-2 hover:bg-[#0F2C64] hover:text-[white] cursor-pointer flex gap-2">
                        <img src={complaint} alt="" />
                        Complaints
                      </li>
                      <li
                        className="p-2 hover:bg-[#0F2C64] hover:text-[white] cursor-pointer flex gap-2"
                        onClick={handleLogout}
                      >
                        <img src={logout} alt="" />
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <span>
                <img src={history} alt="filter" />
              </span>

              <span>
                <img src={filter} alt="filter" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
