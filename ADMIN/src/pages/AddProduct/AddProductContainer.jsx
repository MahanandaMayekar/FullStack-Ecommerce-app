import useAddProduct from "@/hooks/useAddProduct";
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AddProduct from "./AddProduct";

const AddProductContainer = () => {
  const { addProductMutation, isSuccess, isLoading } = useAddProduct();
  const { auth } = useAuth();
  const [images, setimages] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null,
  });

  const [productInfo, setProductInfo] = useState({
    name: "",
    description: "",
    category: "Men",
    subCategory: "Topwear",
    bestSellor: false,
    price: "",
    sizes: [],
  });
  useEffect(() => {
    console.log("Updated bestsellor:", productInfo.bestSellor);
  }, [productInfo.bestSellor]);

  const handleSizeSelection = (size) => {
    setProductInfo((prev) => {
      const sizes = prev.sizes.includes(size)
        ? prev.sizes.filter((s) => s !== size)
        : [...prev.sizes, size];
      return { ...prev, sizes };
    });
  };

  async function onSubmitHandler(e) {
    try {
      e.preventDefault();
      const formData = new FormData();
      //  Append text fields from productInfo
      formData.append("name", productInfo.name);
      formData.append("description", productInfo.description);
      formData.append("category", productInfo.category);
      formData.append("subCategory", productInfo.subCategory);
      formData.append("bestSeller", JSON.stringify(productInfo.bestSellor));
      formData.append("price", productInfo.price);

      //  Convert `sizes` array to a string before appending
      formData.append("sizes", JSON.stringify(productInfo.sizes));

      // Append images if they exist
      if (images.image1) formData.append("image1", images.image1);
      if (images.image2) formData.append("image2", images.image2);
      if (images.image3) formData.append("image3", images.image3);
      if (images.image4) formData.append("image4", images.image4);

      await addProductMutation({ token: auth?.token, formData: formData });
      toast("Product added successfully");
    } catch (error) {
      toast.error("Failed to add Product");
      console.log("error in submitting form" || error.message);
    }
  }
  useEffect(() => {
    if (isSuccess) {
      // Reset state when mutation is successful
      setProductInfo({
        name: "",
        description: "",
        category: "Men",
        subCategory: "Topwear",
        bestSellor: false,
        price: "",
        sizes: [],
      });

      setimages({
        image1: null,
        image2: null,
        image3: null,
        image4: null,
      });
    }
  }, [isSuccess]);
  return (
    <AddProduct
      images={images}
      setimages={setimages}
      productInfo={productInfo}
      setProductInfo={setProductInfo}
      handleSizeSelection={handleSizeSelection}
      onSubmitHandler={onSubmitHandler}
      isLoading={isLoading}
    />
  );
};

export default AddProductContainer;
