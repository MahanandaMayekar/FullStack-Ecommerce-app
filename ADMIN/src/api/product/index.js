import axios from "axios";

export const addProductRequest = async ({ token, formData }) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/products/add",

      formData,
      {
        headers: {
          "x-access-token": token,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("response of add product", response.data.Response);

    return response.data.Response;
  } catch (error) {
    //console.error("error in adding product", error.response);
    throw new Error(
      error.response ||
        "Unable to login Please check your credentials and try again."
    );
  }
};

export const fetchAllProductsRequest = async ({ token }) => {
  try {
    const response = await axios.get(
      "http://localhost:8000/api/products/list-products",
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    //console.log("Successfully fetched all the product", response.data.Response);
    return response.data.Response;
  } catch (error) {
    //console.error("error in fetching all products", error.response);
    throw new Error(error.response || "failed to fetch all the products.");
  }
};

export const deleteProductByIdRequest = async ({ productId, token }) => {
  try {
    const response = await axios.delete(
      `http://localhost:8000/api/products/deleteProduct/${productId}`,
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    //console.log("Successfully deleted the product", response.data.Response);
    return response.data.Response;
  } catch (error) {
    //console.error("error in deleting the product by id", error.data);
    throw new Error(error.response || "failed to delete the product.");
  }
};
