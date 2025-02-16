import useFetchAllProducts from "@/hooks/useFetchAllProducts";
import ListProducts from "./ListProducts";
import useDeleteProduct from "@/hooks/useDeleteProduct";
import { toast } from 'react-toastify';
import { useQueryClient } from '@tanstack/react-query';

const ListProductContainer = () => {
   const queryClient = useQueryClient();
  const { productList, isError, isSuccess, isFetching } = useFetchAllProducts();
  const { deletedProduct } = useDeleteProduct();
  async function handleDeleteProduct(productId) {
    console.log("delete btn clicked");
    console.log("producctid",productId);
    
    try {
      await deletedProduct({ productId });
      toast.success("Successfully deleted the product")
      queryClient.invalidateQueries("fetchAllProducts");
    } catch (error) {
      toast.error("error in deleting the product");
      console.log("error in deleting the  product", error);
    }
  }
  return (
    <ListProducts
      productList={productList}
      handleDeleteProduct={handleDeleteProduct}
      isFetching={isFetching}
    />
  );
};

export default ListProductContainer;
