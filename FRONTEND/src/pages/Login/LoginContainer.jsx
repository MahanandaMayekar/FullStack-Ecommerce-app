import { useState } from "react";
import Login from "./Login";
import useLogin from "@/hooks/auth/useLogin";
import { useNavigate } from 'react-router-dom';


const LoginContainer = () => {
  const { loginMutation } = useLogin();
  const navigate=useNavigate()
  const [currentState, setCurrentState] = useState("Sign Up");
  const [signin, setSignin] = useState({
    email: "",
    password:""
  })
  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      await loginMutation({email:signin.email,password:signin.password})
      console.log("data submitted successfully");
     navigate("/");
      
    } catch (error) {
      console.log("error in submitting data",error);      
    }
  };
  
  return (
    <Login
      currentState={currentState}
      setCurrentState={setCurrentState}
      handleFormSubmit={handleFormSubmit}
      signin={signin}
      setSignin={setSignin}
    />
  );
};

export default LoginContainer;
