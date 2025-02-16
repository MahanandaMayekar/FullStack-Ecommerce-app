import { fetchAllProductsRequest } from "@/api/product";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";

const useFetchAllProducts = () => {
  const { auth } = useAuth();
  const {isError,isSuccess,isFetching,data:productList} = useQuery({
    queryKey: ["fetchAllProducts"],
    queryFn: () => fetchAllProductsRequest({ token: auth?.token }),
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
