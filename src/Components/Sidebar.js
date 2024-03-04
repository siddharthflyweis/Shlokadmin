import dashboard from "../Assets/Sidebar/dashboard.svg";
import lawyer from "../Assets/Sidebar/lawyer.svg";
import totaluser from "../Assets/Sidebar/totaluser.svg";
import cases from "../Assets/cases.svg";
import department from "../Assets/department.svg";
import notification from "../Assets/notification.svg";
import meeting from "../Assets/meeting.svg";
import booking from "../Assets/booking.svg";
import services from "../Assets/services.svg";
import banner from "../Assets/banners.svg";
import allfiles from "../Assets/allfiles.svg";
import todolist from "../Assets/todolist.svg";
import permission from "../Assets/permission.svg";
import message from "../Assets/message.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-[#0F2C64] h-[1000px]">
      <div className="text-center text-white text-2xl pt-10">Admin</div>
      <ul className="mt-10 items-start">
        <Link to="/dashboard">
          <li className="flex pl-[50px] pt-[12px] pb-[12px] items-left cursor-pointer hover:bg-[#1e3a8a]">
            <img src={dashboard} alt="" />

            <div className="text-white ml-2 font-semibold">Dashboard</div>
          </li>
        </Link>
        <Link to="/Lawyers">
          <li className="flex pl-[50px] pt-[12px] pb-[12px] items-left cursor-pointer hover:bg-[#1e3a8a]">
            <img src={lawyer} alt="" />

            <span className="text-white ml-2 font-semibold">Lawyers</span>
          </li>
        </Link>
        <Link to="/totalusers">
          <li className="flex pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#1e3a8a] ">
            <img src={totaluser} alt="" />

            <span className="text-white ml-2 font-semibold">Total Users</span>
          </li>
        </Link>
        <Link to="/cases">
          <li className="flex pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#1e3a8a]">
            <img src={cases} alt="" />

            <span className="text-white ml-2 font-semibold">Cases</span>
          </li>
        </Link>
        <Link to="/department">
          <li className="flex  pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#1e3a8a]">
            <img src={department} alt="" />

            <span className="text-white ml-2 font-semibold">Department</span>
          </li>
        </Link>
        <Link to="/notification">
        <li className="flex  pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#1e3a8a]">
          <img src={notification} alt="" />

          <span className="text-white ml-2 font-semibold">Notification</span>
        </li>
        </Link>
        <Link to="/meeting">
        <li className="flex  pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#1e3a8a]">
          <img src={meeting} alt="" />

          <span className="text-white ml-2 font-semibold">Meeting</span>
        </li>
        </Link>
        <li className="flex  pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#1e3a8a]">
          <img src={booking} alt="" />

          <span className="text-white ml-2 font-semibold">Booking</span>
        </li>{" "}
        <li className="flex  pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#1e3a8a]">
          <img src={services} alt="" />

          <span className="text-white ml-2 font-semibold">Services</span>
        </li>{" "}
        <li className="flex  pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#1e3a8a]">
          <img src={banner} alt="" />

          <span className="text-white ml-2 font-semibold">Banners</span>
        </li>{" "}
        <li className="flex  pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#1e3a8a] ">
          <img src={allfiles} alt="" />

          <span className="text-white ml-2 font-semibold">All Files</span>
        </li>
        <li className="flex  pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#1e3a8a] ">
          <img src={todolist} alt="" />

          <span className="text-white ml-2 font-semibold">To-Do List</span>
        </li>
        <li className="flex  pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer  hover:bg-[#1e3a8a]">
          <img src={permission} alt="" />

          <span className="text-white ml-2 font-semibold">Permissions</span>
        </li>
        <li className="flex  pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#1e3a8a] ">
          <img src={message} alt="" />

          <span className="text-white ml-2 font-semibold">Messages</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
