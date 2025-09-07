import React from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <section className="h-[700px] bg-[#f2f4f7]">
      <div className="container flex justify-between place-items-center">
        <div className="w-[50%] pb-[13%] grid gap-[10px]">
          <h2 className="text-6xl text-[#0866ff] font-bold">facebook</h2>
          <p className="text-3xl">
            Connect with Friend and the world around you on Facebook.
          </p>
        </div>
        <div className="place-items-center w-[40%]">
          <form className="flex flex-col w-[100%] p-[5%] rounded-[6px] gap-[10px] bg-white mb-[6%]">
            <input
              className="w-[100%] h-[50px] border border-gray-300 indent-4 rounded-[6px] text-[18px]"
              type="text"
              placeholder="Email or phone number"
            />
            <input
              className="w-[100%] h-[50px] border rounded-[6px]  indent-4 border-gray-300 text-[18px]"
              type="text"
              placeholder="Passsword"
            />
            <button className="h-[50px] bg-[#0866ff] text-white rounded-[6px] text-[20px] font-bold">
              Log in
            </button>
            <a href="#" className="text-center m-[4px] text-[#0866ff] mb-[8px]">
              forgot password?
            </a>
            <hr className="text-gray-300" />
            <button
              className="bg-[#42b72a] h-[50px] w-[60%] rounded-[6px] text-white m-auto text-[18px] my-[1%] mt-[3%] font-medium"
              onClick={() => navigate("/signup")}
            >
              Create new account
            </button>
          </form>
          <p className="mb-[6%] w-[85%]">
            <a href="#" className="font-medium">
              Create a Page
            </a>
            for a celebrity, brand or business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
