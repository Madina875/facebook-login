import React, { memo } from "react";
import UserView from "../user_view";

const Home = () => {
  return (
    <div>
      <UserView />
    </div>
  );
};

export default memo(Home);
