import { changeOrderStatusRequest } from "@/api/order";
import { useAuth } from "./useAuth";

import { useMutation } from "@tanstack/react-query";
changeOrderStatusRequest;
const useUpdateOrderStatus = () => {
  const { auth } = useAuth();
  const {
    isLoading,
    isSuccess,
    error,
    mutateAsync: statausUpdatedOrder,
  } = useMutation({
    mutationFn: ({ orderId, status }) =>
      changeOrderStatusRequest({ orderId, status, token: auth?.token }),
    onSuccess: (data) => {
      console.log("successfully updated order status", data);
    },
    onError: (error) => {
      console.log(
        "error in updating order status",
        error?.data || error.message || error
      );
    },
  });
  return {
    isLoading,
    isSuccess,
    error,
    statausUpdatedOrder,
  };
};

export default useUpdateOrderStatus;
