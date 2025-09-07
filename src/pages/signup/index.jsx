import React, { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = ({ setData }) => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");
  const [numEm, setnumEm] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let user = {
      id: Date.now(),
      firstName,
      lastName,
      gender,
      day,
      month,
      year,
      numEm,
      password,
    };
    setData((prev) => [...prev, user]);
    console.log(data);
  };

  return (
    <section className="bg-[#f0f2f5]">
      <div className="container place-items-center py-[30px]">
        <h2 className="text-6xl text-[#0866ff] font-bold mb-[30px]">
          facebook
        </h2>
        <form
          onSubmit={handleSubmit}
          action=""
          className="bg-white  h-[100%] w-[45%] place-items-center text-black rounded-[8px] py-[10px]"
        >
          <div>
            <h3 className="text-[25px] font-medium">Create a new account</h3>
            <p className="my-[6px] mb-[10px] text-center text-gray-600">
              It’s quick and easy.
            </p>
          </div>
          <hr className="bw-[1px] w-[100%] border-gray-300" />
          <div className="w-[100%] px-[15px]">
            <div className="mt-[18px] w-[100%] flex gap-[12px] ">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                className="indent-3 border border-gray-300 h-[45px] w-[100%] rounded-[5px]"
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
                className="indent-3 border border-gray-300 h-[45px] w-[100%] rounded-[5px]"
              />
            </div>
            <p className="mt-[10px] flex place-items-center h-[20px] text-gray-600">
              Birthday
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18px"
                viewBox="0 -960 960 960"
                width="18px"
                fill="#e3e3e3"
              >
                <path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
            </p>
            <div className="grid grid-cols-3 gap-[13px] h-[35px] mt-[10px]">
              <select
                className="border border-gray-300 rounded-[4px] indent-3 h-[40px] w-[100%]"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              >
                <option value="">Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
              <select
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="border border-gray-300 rounded-[4px] indent-3 h-[40px] w-[100%]"
              >
                <option value="">Day</option>
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1}>{i + 1}</option>
                ))}
              </select>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="border border-gray-300 rounded-[4px] indent-3 h-[40px] w-[100%]"
              >
                <option value="">Year</option>
                {Array.from({ length: 2025 - 1900 + 1 }, (_, i) => (
                  <option key={i}>{2025 - i}</option>
                ))}
              </select>
            </div>
            <p className="mt-[10px] flex place-items-center h-[20px] text-gray-600">
              Gender
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18px"
                viewBox="0 -960 960 960"
                width="18px"
                fill="#e3e3e3"
              >
                <path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
            </p>
            <div className="grid grid-cols-3 gap-[13px] h-[35px] mt-[10px]">
              <label className="border border-gray-300 rounded-[4px] indent-3 h-[40px] flex items-center px-2 justify-between cursor-pointer">
                Female{" "}
                <input
                  type="radio"
                  value="female"
                  onChange={(e) => setGender(e.target.value)}
                  name="gen"
                  className="cursor-poiner"
                />
              </label>
              <label className="border border-gray-300 rounded-[4px] indent-3 h-[40px] flex items-center px-2 justify-between cursor-pointer">
                Male{" "}
                <input
                  type="radio"
                  value="male"
                  onChange={(e) => setGender(e.target.value)}
                  name="gen"
                  className="cursor-pointer"
                />
              </label>
              <label className="border border-gray-300 rounded-[4px] indent-3 h-[40px] flex items-center px-2 justify-between cursor-pointer">
                Custom{" "}
                <input
                  type="radio"
                  value="custom"
                  onChange={(e) => setGender(e.target.value)}
                  name="gen"
                  className="cursor-poiner"
                />
              </label>
            </div>
            <div className="flex w-[100%] flex-col mt-[15px] gap-[10px]">
              <input
                type="text"
                placeholder="Mobile number or email"
                value={numEm}
                onChange={(e) => setnumEm(e.target.value)}
                className="border rounded-[4px] h-[45px] border-gray-300 indent-3"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="New password"
                className="border rounded-[4px] h-[45px] border-gray-300 indent-3"
              />
            </div>
            <p className="mt-[20px] text-[12px]">
              People who use our service may have uploaded your contact
              information to Facebook.{" "}
              <a href="#" className="text-[#385898]">
                Learn more.
              </a>
            </p>
            <p className="mt-[10px] text-[12px] mb-[20px]">
              By clicking Sign Up, you agree to our
              <a href="#" className="text-[#385898]">
                Terms, Privacy Policy and Cookies Policy.
              </a>{" "}
              You may receive SMS Notifications from us and can opt out any
              time.
            </p>
            <button
              onClick={() => navigate("/home")}
              className="m-auto block w-[43%] h-[35px] rounded-[4px] bg-[#00a400] text-white text-[20px]  font-medium mb-[16px]"
            >
              Sign Up
            </button>
            <p className="text-center mb-[15px] text-[#1877f4] text-[16px]">
              Already have an account?
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default memo(SignUp);
