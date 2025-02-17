import { loginRequest } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from 'react-toastify';

const useLogin = () => {
  const {
    mutateAsync: loginMutation,
    isPending,
    isSuccess,
    error,
  } = useMutation({
    mutationFn: loginRequest,
    onSuccess: (data) => {
        console.log("successfully login", data);
        const userObject = JSON.stringify(data)
        localStorage.setItem("user", userObject);
        localStorage.setItem("token",data.token)
    },
    onError: (err) => {
        console.log("failed to login");
        toast.error(err.message || "failed to login");
    },
  });
  return {
    loginMutation,
    isPending,
    isSuccess,
    error,
  };
};

export default useLogin;
