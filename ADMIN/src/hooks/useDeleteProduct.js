import { deleteProductByIdRequest } from "@/api/product";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "./useAuth";

const useDeleteProduct = () => {
  const { auth } = useAuth();
  const {
    isLoading,
    isSuccess,
    error,
    mutateAsync: deletedProduct,
  } = useMutation({
    mutationFn: ({ productId }) =>
      deleteProductByIdRequest({ productId, token: auth?.token }),
    onSuccess: (data) => {
      console.log("successfully deleted the product", data);
    },
    onError: (error) => {
      console.log("error in deleting the product", error.message);
    },
  });
  return {
    isLoading,
    isSuccess,
    error,
    deletedProduct,
  };
};

export default useDeleteProduct;
