import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout";
import Home from "./home";
import Posts from "./posts";
import SignIn from "./signin";
import SignUp from "./signup";
import NotFound from "./not-found/NotFound";
import FooterLayout from "./layout_footer";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<FooterLayout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
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
