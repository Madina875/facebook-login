import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout";
import Home from "./home";
import Posts from "./posts";
import SignIn from "./signin";
import SignUp from "./signup";
import NotFound from "./not-found/NotFound";
import FooterLayout from "./layout_footer";
import NotUser from "./not_user";

const AppRouter = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("user")) || []
  );
  console.log(data);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(data));
  }, [data]);

  return (
    <Routes>
      <Route path="/" element={<FooterLayout />}>
        <Route path="/" element={<SignIn data={data} />} />
        <Route path="/signup" element={<SignUp setData={setData} />} />
        <Route path="/not-user" element={<NotUser />} />
      </Route>

      <Route path="/" element={<MainLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
