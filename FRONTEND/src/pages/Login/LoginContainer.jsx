import { useState } from "react";
import Login from "./Login";

const handleFormSubmit = (e) => {
  e.preventDefault();
};

const LoginContainer = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  return (
    <Login
      currentState={currentState}
      setCurrentState={setCurrentState}
      handleFormSubmit={handleFormSubmit}
    />
  );
};

export default LoginContainer;
