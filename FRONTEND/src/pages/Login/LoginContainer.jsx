import { useEffect, useState } from "react";
import Login from "./Login";
import useLogin from "@/hooks/auth/useLogin";
import { useNavigate } from "react-router-dom";
import useRegisterUser from "@/hooks/auth/useRegisterUser";
import { toast } from "react-toastify";

const LoginContainer = () => {
  const {
    loginMutation,
    isPending: loginIspending,
    isSuccess: loginSuccess,
  } = useLogin();
  const {
    registerUserMutation,
    isPending: userRegisterIsPending,
    isSuccess: userRegisterSuccess,
  } = useRegisterUser();
  const navigate = useNavigate();
  const [currentState, setCurrentState] = useState("Sign Up");
  const [signin, setSignin] = useState({
    email: "",
    password: "",
  });
  const [registerUser, setRegisterUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      if (currentState === "Sign Up") {
        await registerUserMutation({
          name: registerUser.name,
          email: registerUser.email,
          password: registerUser.password,
        });
        console.log(" successfully created new user");
      } else {
        await loginMutation({
          email: signin.email,
          password: signin.password,
        });
        console.log("data submitted successfully");
      }
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        "Something went wrong. Please try again.";
      console.error("Error in submitting data:", errorMessage);
      toast.error(errorMessage);
    }
  };
  useEffect(() => {
    if (userRegisterSuccess) {
      setTimeout(() => {
        toast.success("Account created! Please log in.");
        setCurrentState("Login");
      }, 3000);
    }
  }, [userRegisterSuccess]);

  useEffect(() => {
    if (loginSuccess) {
      setTimeout(() => {
        navigate("/");
        toast.success("Successfully logged in!");
      }, 3000);
    }
  }, [loginSuccess, navigate]);

  return (
    <Login
      currentState={currentState}
      setCurrentState={setCurrentState}
      handleFormSubmit={handleFormSubmit}
      signin={signin}
      setSignin={setSignin}
      registerUser={registerUser}
      setRegisterUser={setRegisterUser}
      userRegisterIsPending={userRegisterIsPending}
      loginIspending={loginIspending}
          />
  );
};

export default LoginContainer;
