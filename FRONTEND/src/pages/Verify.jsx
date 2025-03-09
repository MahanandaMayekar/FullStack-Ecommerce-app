import useCart from "@/hooks/context/useCart";
import useStripeVerification from "@/hooks/order/useStripeVerification";
import { useEffect } from "react";
import { List } from "react-content-loader";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

const Verify = () => {
  const navigate = useNavigate();
  const { setCartItems } = useCart();
  const [searchParams] = useSearchParams(); // Fix typo
  const orderId = searchParams.get("orderId");
  const success = searchParams.get("success");

  const { isPending, verifyStripeMutation } = useStripeVerification();

  const verifyPayment = async () => {
    try {
      if (orderId && success) {
        await verifyStripeMutation({ orderId, success });
        setCartItems({});
        navigate("/orders");
        toast.success("Your order has been placed Successfully");
      } else {
        navigate("/cart");
        toast("Payment verification failed. Please try again");
      }
    } catch (error) {
      console.log("err in verification", error);
    }
  };

  useEffect(() => {
    if (isPending) return;
    verifyPayment();
  }, [orderId, success, verifyStripeMutation]); // Run effect when params change

  return (
    <div>
      <p>This is the verification page</p>
      {isPending && (
        <div className="mt-10 ">
          <List />
        </div>
      )}
    </div>
  );
};

export default Verify;
