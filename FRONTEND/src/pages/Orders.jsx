import Title from "@/components/Title";
import { useShopContext } from "@/hooks/context/useShopContext";
import useFetchUsersOrderDetails from "@/hooks/order/useFetchUsersOrderDetails";
import React from "react";

const Orders = () => {
  const { currency } = useShopContext();
  const { orderedProductList, isLoading } = useFetchUsersOrderDetails();

  if (isLoading) return;

  return (
    <div className="border-t pt-20 sm:w-full bg-gray-50 min-h-screen px-6">
      <div>
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

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
                  className="flex items-center gap-6 p-4 bg-gray-100 rounded-lg shadow-sm"
                >
                  <img
                    src={product.image?.[0]}
                    className="w-24 sm:w-32 object-contain rounded-md"
                    alt={product.name}
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-lg font-bold text-gray-800">
                      {product.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {product.description}
                    </p>
                    <div className="flex gap-6 text-sm sm:text-md text-gray-700">
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
            <div className="flex justify-between items-center mt-6">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg"></div>
                <p className="text-gray-700 font-medium">Status:{order.status}</p>
              </div>
              <button
                onClick={() => navigate("")}
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
