import React, { useEffect, useState } from "react";
import AddProduct from "./AddProduct";

const AddProductContainer = () => {
  const [images, setimages] = useState({
    image1: false,
    image2: false,
    image3: false,
    image4: false,
  });

  const [productInfo, setProductInfo] = useState({
    name: "",
    description: "",
    category: "Men",
    subCategory: "Topwear",
    bestsellor: false,
    price: "",
    sizes: [],
  });
  useEffect(() => {
    console.log(productInfo.bestsellor);
  }, [productInfo.bestsellor]);

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
      console.log("submitted data", productInfo);
    } catch (error) {
      console.log("error in submitting form", error);
    }
  }
  return (
    <AddProduct
      images={images}
      setimages={setimages}
      productInfo={productInfo}
      setProductInfo={setProductInfo}
      handleSizeSelection={handleSizeSelection}
      onSubmitHandler={onSubmitHandler}
    />
  );
};

export default AddProductContainer;
