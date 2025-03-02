
import { usersOrderDetailsRequest } from '@/api/orders';
import { useQuery } from "@tanstack/react-query";
import useAuth from '../auth/useAuth';
const useFetchUsersOrderDetails = () => {
    const { auth } = useAuth()
    
    
  const {
    data: orderedProductList,
    isError,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ["fetchUsersOrderDetails"],
    queryFn: () => usersOrderDetailsRequest({token:auth.token}),
    staleTime: 30000,
  });

  return { orderedProductList, isError, isSuccess, isLoading };
  
}

export default useFetchUsersOrderDetails

