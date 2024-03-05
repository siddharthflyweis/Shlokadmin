import userimage from "../Assets/userimage.svg";
import timer from "../Assets/timer.svg";

const Booking = () => {
  return (
    <div className="pt-5 ml-5 mr-5">
      <div className="text-2xl mb-5 text-[black] font-semibold ">Bookings</div>
      <div>
        <hr />
        <div className="flex gap-10 ml-8 mt-3 mb-3">
          <div className="cursor-pointer">Upcoming</div>
          <div className="cursor-pointer">past</div>
          <div className="cursor-pointer">Cancelled</div>
        </div>
        <hr />
      </div>
      <div className="mt-5">
        <table className="w-full">
          <thead>
            <tr>
              <th className="w-[150px] text-left text-[#0F2C64]">
                Consulted Name
              </th>
              <th className="text-center text-[#0F2C64] w-[150px]">
                Advocate Name
              </th>
              <th className="w-[150px] text-center text-[#0F2C64]">
                Languages
              </th>
              <th className=" w-[100px] text-center text-[#0F2C64]">Time</th>
              <th className=" w-[100px] text-center text-[#0F2C64]">
                Location
              </th>

              <th className="w-[150px] text-center text-[#0F2C64]">Reason</th>
              <th className="w-[150px] text-center text-[#0F2C64]"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t-2 border-b-2 m-5">
              <td className="text-left">
                <div className="flex items-center gap-2">
                  <img src={userimage} alt=""/>
                  john
                </div>
              </td>
              <td className="w-[200px] text-center">Advocate Yash</td>

              <td className="text-center">Hindi ,gujrat</td>
              <td className="text-center">Time 12:00</td>
              <td className="w-[50px] text-center">gujrat</td>
              <td className="w-[50px] text-center">Marriage Problem</td>
              <td className=" text-center ">
                <span className="bg-[#EDEDED] text-[#0F2C64] rounded-2xl w-[150px] pl-2 flex gap-1 ">
                  <img src={timer} alt="" />
                  10 min booked
                </span>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
