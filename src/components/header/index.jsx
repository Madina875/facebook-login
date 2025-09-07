import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header
      className={`flex h-18 items-center gap-4 bg-gray-100 mx-[2%] rounded-3xl place-items-center justify-between my-[1%] px-[3%]`}
    >
      <div className="text-3xl text-gray-600">LOGOO</div>
      <div className="flex gap-10">
        <NavLink
          className={({ isActive }) =>
            `uppercase text-2xl text-gray-600 ${
              isActive ? "text-black underline" : ""
            }`
          }
          to={"/home"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `uppercase text-2xl text-gray-600 ${
              isActive ? "text-red-500 underline" : ""
            }`
          }
          to={"/posts"}
        >
          Posts
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `uppercase text-2xl text-gray-600 ${
              isActive ? "text-red-500 underline" : ""
            }`
          }
          to={"/sdfgh"}
        >
          NotFound
        </NavLink>
        <NavLink
          onClick={() => alert("are you sure?")}
          className={({ isActive }) =>
            `uppercase text-2xl text-gray-600 ${
              isActive ? "text-red-500 underline" : ""
            }`
          }
          to={"/"}
        >
          | logout
        </NavLink>
      </div>
    </header>
  );
};

export default memo(Header);
