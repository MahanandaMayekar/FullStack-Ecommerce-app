
import { useQuery } from '@tanstack/react-query';
import { useAuth } from './useAuth';
import { adminOrderDetailsRequest } from '@/api/order';

const useFetchAdminOrderList = () => {
 const { auth } = useAuth();
 const {
   data: orderedProductList,
   isError,
   isSuccess,
   isLoading,
 } = useQuery({
   queryKey: ["fetchAdminsOrderDetails"],
   queryFn: () => adminOrderDetailsRequest({ token: auth.token }),
   staleTime: 30000,
 });

 return { orderedProductList, isError, isSuccess, isLoading };
}

export default useFetchAdminOrderList
