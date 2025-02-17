import { loginRequest } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

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
    },
    onError: () => {
      console.log("failed to login");
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
