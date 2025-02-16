import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Delete } from "lucide-react";
import React from "react";

const ProductItem = ({
  image,
  name,
  category,
  price,
  handleDeleteProduct,
  productId,
}) => {
  const currency = "$";
  return (
    <div className="grid  grid-cols-5  items-center gap-4  sm:gap-12 border p-5 mt-2 mb-2 text-xs sm:text-lg ">
      <img src={image} alt="" className="w-16 sm:w-20" loading='lazy'/>

      <p className=" sm:text-lg font-medium truncate  ">{name}</p>
      <p className=" sm:text-left text-gray-600 ">{category}</p>
      <p className=" sm:text-left font-semibold">
        {currency}
        {price}
      </p>

      <div className="flex justify-center sm:justify-start cursor-pointer">
        <AlertDialog.Root>
          <AlertDialog.Trigger asChild>
            <button>
              <Delete size={26} />
            </button>
          </AlertDialog.Trigger>

          <AlertDialog.Portal>
            <AlertDialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />

            <AlertDialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[400px] z-50">
              <AlertDialog.Title className="text-lg font-semibold">
                Are you sure?
              </AlertDialog.Title>
              <AlertDialog.Description className="text-gray-600 mt-2">
                This action cannot be undone. This will permanently delete the
                product.
              </AlertDialog.Description>

              <div className="flex justify-end gap-4 mt-4">
                <AlertDialog.Cancel asChild>
                  <button className="px-4 py-2 bg-gray-200 rounded">
                    Cancel
                  </button>
                </AlertDialog.Cancel>
                <AlertDialog.Action asChild>
                  <button
                    className="px-4 py-2 bg-red-600 text-white rounded"
                    onClick={() => handleDeleteProduct(productId)}
                  >
                    Yes, delete
                  </button>
                </AlertDialog.Action>
              </div>
            </AlertDialog.Content>
          </AlertDialog.Portal>
        </AlertDialog.Root>
      </div>
    </div>
  );
};

export default ProductItem;
