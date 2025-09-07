import axios from "axios";
import React, { memo, useEffect, useState } from "react";

const UserView = () => {
  // const navigate = useNavigate();
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => setData(res.data));
  }, []);
  return (
    <>
      <div className="grid grid-cols-4 rounded-2xl mb-[4%] gap-[30px] p-[30px] bg-gray-100">
        {data?.map((el) => (
          <div key={el.id} className="rounded-2xl bg-white pt-[3%]">
            <div
              // onClick={() => navigate(`/user/${el.id}`)}
              className="place-items-center cursor-cell"
            ></div>
            <div className="p-[4%] mt-[4%] place-items-center">
              <p className="text-3xl">{el.name}</p>
              <h3 className="text-2xl italic mt-[5%]">{el.phone}</h3>
              <p className="text-[1.3rem] my-[2%]">email: {el.email}</p>
              <p className="text-[1.3rem] my-[2%]">
                address: {el.address.street}
              </p>
              <p className="text-[1.3rem] my-[2%]">website: {el.website}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default memo(UserView);
