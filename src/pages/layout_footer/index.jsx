import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";

const FooterLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default memo(FooterLayout);
