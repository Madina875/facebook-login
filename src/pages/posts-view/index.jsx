import axios from "axios";
import React, { memo, useEffect, useState } from "react";

const PostsView = () => {
  // const navigate = useNavigate();
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => setData(res.data));
  }, []);
  return (
    <>
      <div className="grid grid-cols-2 rounded-2xl mb-[4%] gap-[30px] p-[30px] bg-gray-100">
        {data?.map((el) => (
          <div key={el.id} className="rounded-2xl bg-white ">
            <div
              // onClick={() => navigate(`/user/${el.id}`)}
              className="place-items-center cursor-cell"
            ></div>
            <div className="p-[1%] mt-[1%] place-items-center">
              <h3 className="text-2xl font-bold italic mt-[5%]">{el.title}</h3>
              <p className="text-[1.3rem] my-[2%]">{el.body}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default memo(PostsView);
