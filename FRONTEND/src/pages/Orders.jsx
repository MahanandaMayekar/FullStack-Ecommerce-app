import Title from "@/components/Title";
import { useShopContext } from "@/hooks/context/useShopContext";
import useFetchUsersOrderDetails from "@/hooks/order/useFetchUsersOrderDetails";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from 'react-router-dom';


const Orders = () => {
  const navigate=useNavigate()
  const { currency } = useShopContext();
  const { orderedProductList, isLoading } = useFetchUsersOrderDetails();
  const query = useQueryClient();
if (isLoading) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-b from-gray-100 to-gray-200 text-gray-700">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-500"></div>
      <p className="mt-3 text-lg font-medium">Fetching your orders...</p>
    </div>
  );
}
if (orderedProductList.length === 0) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 text-center w-80 transform transition duration-300 hover:scale-105">
        <p className="text-2xl">🛒</p>
        <p className="text-lg font-semibold mt-2">Your cart is empty!</p>
        <p className="text-gray-500 mt-1">
          Start adding products to place an order.
        </p>
        <button
          className="mt-4 px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 hover:shadow-md"
          onClick={() => navigate("/collection")}
        >
          🛍️ Browse Products
        </button>
      </div>
    </div>
  );
}
  function handleTrackOrder() {
    query.invalidateQueries("fetchUsersOrderDetails");
  }

  return (
    <div className="border-t pt-20 sm:w-full bg-gray-50 min-h-screen px-4 sm:px-6">
      <Title text1={"MY"} text2={"ORDERS"} />

      <div className="mt-6 space-y-6">
        {orderedProductList.slice(0, 8).map((order, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 border">
            {/* Order Details */}
            <div className="border-b pb-4 mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Order ID: <span className="text-gray-600">{order._id}</span>
              </h2>
              <p className="text-sm text-gray-500">
                Payment Method:{" "}
                <span className="font-medium">{order.paymentMethod}</span>
              </p>
              <p className="text-sm text-gray-500">
                Total Amount:{" "}
                <span className="font-medium">
                  {currency}
                  {order.amount}
                </span>
              </p>
              <p className="text-sm text-gray-500">
                Order Placed:{" "}
                <span className="font-medium">
                  {new Date(order.createdAt).toDateString()}
                </span>
              </p>
            </div>

            {/* Products in the Order */}
            <div className="space-y-4">
              {order.products.map((product, productIndex) => (
                <div
                  key={productIndex}
                  className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-sm"
                >
                  <img
                    src={product.image?.[0] || "/default-image.jpg"}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md"
                    alt={product.name}
                  />
                  <div className="text-center sm:text-left">
                    <p className="text-lg font-bold text-gray-800">
                      {product.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {product.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm sm:text-md text-gray-700 mt-2">
                      <p>
                        <span className="font-medium">Price:</span> {currency}
                        {product.price}
                      </p>
                      <p>
                        <span className="font-medium">Quantity:</span>{" "}
                        {product.quantity || 1}
                      </p>
                      <p>
                        <span className="font-medium">Size:</span>{" "}
                        {product.sizes?.[0] || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Status & Tracking */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-3">
              <div className="flex items-center gap-2">
                <div
                  className={`w-4 h-4 rounded-full shadow-lg ${
                    order.status === "Delivered"
                      ? "bg-green-500"
                      : "bg-yellow-400"
                  }`}
                ></div>
                <p className="text-gray-700 font-medium">
                  Status: {order.status}
                </p>
              </div>
              <button
                onClick={handleTrackOrder}
                className="bg-blue-500 text-white font-bold text-sm sm:text-md px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all"
              >
                TRACK YOUR ORDER
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
