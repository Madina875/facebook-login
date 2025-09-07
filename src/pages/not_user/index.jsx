import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

const NotUser = () => {
  const navigate = useNavigate();
  return (
    <section className="h-[700px]">
      <div className="container flex justify-center place-items-center h-[100%] flex-col gap-[5%]">
        <p className="text-5xl text-center font-serif italic text-black">
          user not exists...
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-white border border-gray-400 w-[20%] h-[40px] rounded-[4px] text-[20px] italic font-medium hover:bg-gray-300"
        >
          Back
        </button>
      </div>
    </section>
  );
};

export default memo(NotUser);
