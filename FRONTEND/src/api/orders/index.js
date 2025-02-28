import axiosconfig from "@/config/axiosconfig";

export const placeOrderByCodRequest = async ({ token, orderData }) => {
  try {
    console.log("Sending Data to API:", orderData);
    const response = await axiosconfig.post("/order/cod", orderData, {
      headers: {
        "x-access-token": token,
      },
    });

    console.log("Successfully placed order by COD", response.data.Response);
    return response?.data?.Response;
  } catch (error) {
    console.error("Error from API:", error.response?.data || error);
    throw new Error(error.response?.data?.message || "Error placing order");
  }
};
