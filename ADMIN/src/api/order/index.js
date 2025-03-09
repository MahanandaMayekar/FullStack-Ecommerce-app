import axiosConfig from '@/config/axiosConfig';

export const adminOrderDetailsRequest = async ({ token }) => {
  try {
    const response = await axiosConfig.get(
      "http://localhost:8000/api/order/list-orders",
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    /*console.log(
      "Successfully fetched admin order details",
      response.data.Response
    );*/

    return response.data.Response;
  } catch (error) {
    console.error("Error from API:", error.response?.data || error);
    throw new Error(
      error.response?.data?.message || "Error in fetching admin order details"
    );
  }
};
export const changeOrderStatusRequest = async ({ token, orderId, status }) => {
  try {
    const response = await axiosConfig.post(
      "http://localhost:8000/api/order/status",
      { orderId, status },
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    //console.log("Successfully updated order status", response.data.Response);

    return response.data.Response;
  } catch (error) {
    console.error("Error from API:", error.response?.data || error);
    throw new Error(
      error.response?.data?.message || "Error in updating order status"
    );
  }
};
