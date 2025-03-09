import RelatedProducts from "@/components/RelatedProducts";
import { useAssets } from "@/hooks/assets/useAssets";
import useCart from "@/hooks/context/useCart";
import { useShopContext } from "@/hooks/context/useShopContext";
import useFetchAllProducts from "@/hooks/products/useFetchAllProducts";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Products = () => {
  const { assets } = useAssets();
  const { productList } = useFetchAllProducts();
  const { productId } = useParams();
  const [currentProduct, setCurrentProduct] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const { currency } = useShopContext();
  // const [ProductSize, setProductSize] = useState("");
  const { cartItems, setCartItems, addToCart, ProductSize, setProductSize } =
    useCart();

  const fetchProductDetails = async () => {
    productList?.map((item) => {
      if (item._id === productId) {
        console.log(item);

        setCurrentProduct(item);

        setCurrentImage(item.image[0]);
        null;
      }
    });
  };
  useEffect(() => {
    fetchProductDetails();
  }, [productList, productId]);
  return currentProduct ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/**product data */}
      <div className="flex flex-col sm:flex-row  ">
        {/**-------------product images-----------*/}

        <div className="flex sm:flex-row sm:gap-4 flex-col gap-4  p-3 flex-1">
          <div className="w-full sm:w-[60%] md:w-[80%] ">
            <img src={currentImage} alt="" className="w-full object-cover " />
          </div>
          <div className="flex gap-4 sm:flex-col   md:w-[22%] sm:w-[12%] w-[22%] ">
            {currentProduct.image.map((item, index) => (
              <img
                src={item}
                onClick={() => setCurrentImage(item)}
                alt=""
                key={index}
                className="w-[300px] h-[200px] object-cover rounded-lg shadow-md"
              />
            ))}
          </div>

          {/**-------------product information-----------*/}
          <div className="flex pl-8 flex-col gap-5 ">
            <p className="text-2xl font-bold font-serif">
              {currentProduct.name}
            </p>
            <div className="flex gap-1 items-center">
              <img src={assets.star_icon} alt="" className="w-3 h-3" />
              <img src={assets.star_icon} alt="" className="w-3 h-3" />
              <img src={assets.star_icon} alt="" className="w-3 h-3" />
              <img src={assets.star_icon} alt="" className="w-3 h-3" />
              <img src={assets.star_dull_icon} alt="" className="w-3 h-3 " />
              <p>(122)</p>
            </div>

            <p className="text-2xl font-medium">
              <span>
                <p className="text-green-700">Special price</p>
              </span>
              {currency}
              {currentProduct.price}
            </p>
            <p>{currentProduct.description}</p>
            <div>
              <p className="font-medium text-xl">Select Size</p>
              <div className="flex gap-3 mt-2">
                {currentProduct.sizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => setProductSize(size)}
                    className={`bg-slate-200 p-2 w-10 text-center border border-gray-300 ${
                      size === ProductSize ? "border-gray-800" : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <button
                className="bg-slate-900 rounded-sm text-white p-3 active:bg-slate-600"
                onClick={() => addToCart(currentProduct._id, ProductSize)}
              >
                ADD TO CART
              </button>
            </div>
            <div>
              <hr className="mt-5 mb-8" />
              <p className="text-sm text-gray-600">100% Original product.</p>
              <p className="text-sm text-gray-600">
                Cash on delivery is available on this product.
              </p>
              <p className="text-sm text-gray-600">
                Easy return and exchange policy within 7 days.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/**
       * description and review section
       */}
      <div className="mt-20">
        <div className="flex ">
          <p className="border p-3">
            <b>description</b>
          </p>
          <p className="border p-3">Reviews(120)</p>
        </div>
        <div className="border pt-2">
          <p className="text-sm text-gray-600 p-3">
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p className="text-sm text-gray-600 p-3">
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>
      {/**related products */}
      <RelatedProducts
        category={currentProduct.category}
        subCategory={currentProduct.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Products;
