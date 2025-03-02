import { useEffect } from 'react';
import ProductOrders from "./ProductOrders";
import useFetchAdminOrderList from '@/hooks/useFetchAdminOrderList';


const ProductOrderContainer = () => {
    const { orderedProductList, isError, isSuccess, isLoading } =
      useFetchAdminOrderList();
    useEffect(() => {
      if (isLoading) return;
      console.log("admin order list", orderedProductList);
    }, []);
  return (
    <ProductOrders
      orderedProductList={orderedProductList}
      isLoading={isLoading}
    />
  );
};

export default ProductOrderContainer;
