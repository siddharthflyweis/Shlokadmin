import React from "react";
import privacy from "../Assets/privacy.svg"
import term from "../Assets/termandcondition.svg"
import google from "../Assets/google.svg"
const Login = () => {
  return (
    <div className="flex">
      <div className="bg-[#0F2C64] w-5/12 h-[100vh] flex flex-col justify-around">
        <div className="grid place-items-center">
          {/* <img src={loginimage} style={{ width: "400px" }} alt="" /> */}
        </div>
        <div className="grid place-items-center">
          <span className="text-5xl text-white font-semibold">Welcome !</span>
          <span className="text-center text-white w-[400px] mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vulputate turpis elit, quis pellentesque ante bibendum nec. In
            posuere finibus risus auctor auctor.{" "}
          </span>
        </div>

        <div className="flex justify-left ml-10 mt-28">
          <div className="flex items-center">
            <img src={privacy} alt="" />{" "}
            <span className="text-white">Privacy Policy</span>
          </div>
          <div className="flex items-center">
            <img src={term} alt="" />{" "}
            <span className="text-white">Term & Condition</span>
          </div>
        </div>
      </div>
      <div className="bg-[#ffffff] w-8/12">
        <div className="text-[#06316A] flex justify-center mt-40 text-2xl">
          Welcome Back !!
        </div>
        <span className="item-center flex justify-center text-[#000000] font-bold text-2xl mt-3">
          Sign-In
        </span>
        <div className="flex justify-center  mt-3">
          <button className="flex rounded gap-2 text-white bg-[#0F2C64] pl-20 pr-20 pt-3 pb-3">
            <img src={google} alt="" /> Sign in with google
          </button>
        </div>
        <span className=" mt-2 flex justify-center text-[#A0A0A0]">or</span>
        <div className="flex justify-center">
          <form className="mt-5">
            <input
              placeholder="Email"
              className="outline-none h-[50px] w-[500px] border-b-[1px] border-[#5D5D5D]"
              type="text"
              id="email"
            />

            <br />
            <div className="flex justify-end items-center">
              <input
                placeholder="Password"
                className="outline-none h-[50px] w-[500px] mt-[10px] border-b-[1px] border-[#5D5D5D] relative"
                type="text"
                id="password"
              />
              {/* <span onClick={toggleState} className="absolute">
                {isShow ? (
                  <Eye className="cursor-pointer" />
                ) : (
                  <EyeOff className="cursor-pointer" />
                )}
              </span> */}
            </div>
            <br />
            <div className="flex justify-center">
              <button className="bg-[#0F2C64] text-white mt-5 p-3 pr-20 pl-20 rounded-xl">
                login
              </button>
            </div>
          </form>
        </div>
        <div className="flex mt-10 justify-center gap-1">
          <span className="text-[#A0A0A0]">Don’t have an account?</span>
          <span className="text-[#094EB2] cursor-pointer">Signup Here</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
