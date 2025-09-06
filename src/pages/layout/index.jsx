import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-[600px] p-[3%]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
