import { useMutation } from "@tanstack/react-query";
import { loginRequest } from "./../api/auth/index.js"; // Ensure this is an async function
import { useAuth } from './useAuth.js';


export const useLogin = () => {
  const {setAuth}=useAuth()
  const {
    mutateAsync: loginMutation, // Renamed for clarity
    isLoading,
    isSuccess,
    error,
  } = useMutation({
    mutationFn: ({ email, password,token }) => loginRequest({ email, password,token }), // Ensure loginRequest is returning a promise
    onSuccess: (data) => {
      console.log("Successfully logged in", data);
      const userObject = JSON.stringify(data);
      localStorage.setItem("user", userObject);
      localStorage.setItem("token", data.token);
      setAuth({
        user: data,
        token: data.token,
      });
     ;
    },
    onError: (error) => {
      console.error("Login failed", error);
    },
  });

  return {
    loginMutation,
    isLoading,
    isSuccess,
    error,
  };
};



