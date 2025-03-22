import { fetchAllProductsRequest } from "@/api/product";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";

const useFetchAllProducts = () => {
  const token=localStorage.getItem("token")
  
  const {
    isError,
    isSuccess,
    isFetching,
    data: productList,
  } = useQuery({
    queryKey: ["fetchAllProducts"],
    queryFn: () => fetchAllProductsRequest({ token: token }),
    staleTime: 30000,
  });
    return {
      isError,
      isSuccess,
      isFetching,
      productList,
    };
};

export default useFetchAllProducts;
