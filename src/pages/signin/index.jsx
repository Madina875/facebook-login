import React from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <section>
      <div>
        <h2>facebook</h2>
        <p>Connect with Friend and the world around you on Facebook.</p>
      </div>
      <div>
        <form action="">
          <input type="text" placeholder="Email or phone number" />
          <input type="text" placeholder="Passsword" />
          <button>Log in</button>
          <a href="#">forget password?</a>
          <hr />
          <button onClick={() => navigate("/signup")}>
            Create new account
          </button>
        </form>
        <p>
          <a href="#">Create a Page</a> for a celebrity, brand or business
        </p>
      </div>
    </section>
  );
};

export default SignIn;
