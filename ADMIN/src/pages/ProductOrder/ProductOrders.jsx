import React from "react";

const ProductOrders = ({
  orderedProductList,
  isLoading,
  handleStatausChange,
}) => {
  return (
    <div className="p-4 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-4 text-center text-black">
        Admin Orders
      </h1>
      {isLoading || orderedProductList?.length === 0 ? (
        <p className="text-center">No orders found</p>
      ) : (
        orderedProductList.map((order) => {
          let address;
          try {
            address =
              typeof order.address === "string"
                ? JSON.parse(order.address)
                : order.address;
          } catch (error) {
            console.error("Invalid JSON address:", order.address);
            address = { street: "N/A", city: "N/A", state: "N/A" };
          }

          return (
            <div
              key={order._id}
              className="bg-gray-100 text-black p-4 rounded-xl mb-4 border shadow-md"
            >
              {/* Order Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                <div>
                  <h2 className="text-lg font-semibold">
                    Order ID: {order._id}
                  </h2>
                  <p className="text-sm text-gray-600">
                    Date: {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="w-full md:w-auto flex justify-end">
                  <select
                    className="p-2 bg-blue-500 text-white rounded w-full md:w-auto"
                    onChange={(e) => handleStatausChange({e,orderId:order._id})}
                  >
                    <option value="Order Placed">Order Placed</option>
                    <option value="Packing">Packing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Processing">Processing</option>
                    <option value="Cancelled">Cancelled</option>
                    <option value="Out for delivery">Out for delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>
              </div>
              {/* Order Details */}
              <div className="mt-3 text-sm md:text-base">
                <p>
                  <strong>Payment:</strong> {order.paymentMethod}
                </p>
                <p>
                  <strong>Total Amount:</strong> ${order.amount}
                </p>
                <p>
                  <strong>Name:</strong> {address.firstName} {address.lastName}
                </p>
                <p>
                  <strong>Address:</strong> {address.street}, {address.city},{" "}
                  {address.state},{address.country}-{address.zipcode}
                </p>
                <p>
                  <strong>Contact Number :</strong> {address.phone}
                </p>
              </div>
              {/* Product List */}
              <h3 className="mt-4 text-lg font-semibold">Products:</h3>
              {order.products.map((product, index) => (
                <div
                  key={index}
                  className="p-3 bg-gray-200 rounded-lg mt-2 flex flex-col md:flex-row items-center gap-4"
                >
                  <img
                    src={product.image?.[0] || "/default-image.jpg"}
                    alt={product.name || "Product Image"}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="text-center md:text-left">
                    <p>
                      <strong>{product.name}</strong> - {product.size} - Qty:{" "}
                      {product.quantity}
                    </p>
                    <p>Price: ${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          );
        })
      )}
    </div>
  );
};

export default ProductOrders;
