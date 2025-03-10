import { StripeVerificationRequest } from "@/api/orders";
import { useMutation } from "@tanstack/react-query";
import useAuth from "../auth/useAuth";

const useStripeVerification = () => {
  const { auth } = useAuth();
  const token = localStorage.getItem("token");

  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: verifyStripeMutation,
  } = useMutation({
    mutationFn: ({ success, orderId }) =>
      StripeVerificationRequest({ token: token, success, orderId }),
    onSuccess: (data) => {
      console.log("Successfully verified payment", data);
    },
    onError: (err) => {
      console.log("failed to verify payment", err);
    },
  });
  return {
    isPending,
    isSuccess,
    error,
    verifyStripeMutation,
  };
};

export default useStripeVerification;
