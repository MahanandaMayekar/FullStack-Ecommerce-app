import { useState } from "react";
import PlaceOrder from "./PlaceOrder";
import useCart from "@/hooks/context/useCart";
import useFetchAllProducts from "@/hooks/products/useFetchAllProducts";
import useTotalCartAmount from "@/hooks/cart/useTotalCartAmount";
import { useShopContext } from "@/hooks/context/useShopContext";
import useCodMethod from "@/hooks/order/useCodMethod";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const PlaceOrderContainer = () => {
  const navigate=useNavigate()
  const { setCartItems } = useCart();
  const { orderByCODMutation, isPending} = useCodMethod();
  const totalAmount = useTotalCartAmount();
  const { cartItems } = useCart();
  const { delivery_fee } = useShopContext();
  const { productList, isLoading } = useFetchAllProducts();
  const [formData, setFromdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const [payMethod, setPayMethod] = useState("");
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFromdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!payMethod) {
      toast.dark("Please select payment method")
    }

    try {
      if (isLoading || isPending) return;
      //if payment methode is "COD" this piece of code executes
      if (payMethod === "COD") {
        let orderedItems = [];

        for (const productId in cartItems) {
          for (const size in cartItems[productId]) {
            const quantity = cartItems[productId][size];
            if (quantity > 0) {
              const findProduct = productList.find(
                (item) => item._id === productId
              );
              if (findProduct) {
                findProduct.size = size;
                findProduct.quantity = quantity;
                orderedItems.push({
                  ...findProduct,
                  size,
                  quantity,
                  //productId: findProduct._id,
                });
              }
            }
          }
        }

        let orderData = {
          address: JSON.stringify(formData),
          products: orderedItems,
          amount: totalAmount + delivery_fee,
        };

        await orderByCODMutation({ orderData });
        setCartItems({});

        toast.success("Your order has been placed Successfully");
        navigate("/orders")
      }
    } catch (error) {
      console.error("Error in submitting delivery information:", error);
      toast.error(
        error.response?.data?.message ||
          "Failed to place order, please try again."
      );
    }
  };
  return (
    <PlaceOrder
      setPayMethod={setPayMethod}
      payMethod={payMethod}
      formData={formData}
      setFromdata={setFromdata}
      onChangeHandler={onChangeHandler}
      onSubmitHandler={onSubmitHandler}
    />
  );
};

export default PlaceOrderContainer;
