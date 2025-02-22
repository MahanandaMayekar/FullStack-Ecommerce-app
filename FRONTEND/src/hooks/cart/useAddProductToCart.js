import { addProductTocartRequest } from "@/api/cart";
import { useMutation } from "@tanstack/react-query";
import useAuth from "../auth/useAuth.js";


const useAddProductToCart = () => {
  const { auth } = useAuth();
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: addProductToCartMutation,
  } = useMutation({
    mutationFn: ({ productId, size }) =>
      addProductTocartRequest({ productId, size, token: auth?.token }),
    onSuccess: (data) => {
      console.log("Successfully added product to cart", data);
    },
    onError: (err) => {
      console.log("failed to added product to cart", err);
    },
  });
  return {
    isPending,
    isSuccess,
    error,
    addProductToCartMutation,
  };
};

export default useAddProductToCart;
