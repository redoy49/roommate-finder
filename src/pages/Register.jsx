import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthContext";

const Register = () => {
  const {userInfo} = useContext(AuthContext);
  console.log(userInfo);

  return (
    <div>
      <h2>This is Register</h2>
    </div>
  );
};

export default Register;
