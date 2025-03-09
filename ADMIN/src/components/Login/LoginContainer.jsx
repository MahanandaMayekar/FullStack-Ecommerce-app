import { useAuth } from "@/hooks/useAuth";
import { useLogin } from "@/hooks/useLogin";
import { useState } from "react";
import Login from "./Login"; // Ensure you pass props properly to the Login component

const LoginContainer = () => {
  const { auth } = useAuth();
  const { loginMutation, isLoading, isSuccess, error } = useLogin();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    //console.log("Login details:", login);

    try {
      // Trigger the mutation
      await loginMutation({
        email: login.email,
        password: login.password,
        token: auth.token,
      });
    } catch (err) {
      // Handle any errors that occurred during mutation
      console.error("Login failed----:", err);
    }
  };

  return (
    <div className=" flex justify-center items-center h-screen">
      <Login
        login={login}
        setLogin={setLogin}
        handleLoginSubmit={handleLoginSubmit}
        isLoading={isLoading}
        isSuccess={isSuccess}
        error={error}
      />
    </div>
  );
};

export default LoginContainer;
