import { useEffect, useState } from "react";
import ProductOrders from "./ProductOrders";
import useFetchAdminOrderList from "@/hooks/useFetchAdminOrderList";
import useUpdateOrderStatus from "@/hooks/useUpdateOrderStatus";

const ProductOrderContainer = () => {
  const { orderedProductList, isError, isSuccess, isLoading } =
    useFetchAdminOrderList();
  const { statausUpdatedOrder, isLoading: isStatausloading } =
    useUpdateOrderStatus();
  if (isLoading || isStatausloading) return;
  async function handleStatausChange({ e, orderId }) {
    await statausUpdatedOrder({ orderId: orderId, status: e.target.value });
  }
 
  return (
    <ProductOrders
      orderedProductList={orderedProductList}
      isLoading={isLoading}
      handleStatausChange={handleStatausChange}
    />
  );
};

export default ProductOrderContainer;
