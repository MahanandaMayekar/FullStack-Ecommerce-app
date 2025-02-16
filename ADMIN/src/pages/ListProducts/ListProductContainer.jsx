import useFetchAllProducts from "@/hooks/useFetchAllProducts";
import ListProducts from "./ListProducts";


const ListProductContainer = () => {
    const { productList, isError, isSuccess, isFetching } = useFetchAllProducts();
  return <ListProducts productList={productList} />;
};

export default ListProductContainer;
