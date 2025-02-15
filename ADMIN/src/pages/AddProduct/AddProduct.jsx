import { assets } from "@/assets/assets";
import React from "react";


const AddProduct = ({
  images,
  setimages,
  productInfo,
  setProductInfo,
  handleSizeSelection,
  onSubmitHandler,
}) => {
  return (
    <form className="flex flex-col gap-3 mb-10" onSubmit={onSubmitHandler}>
      <div className="sm:w-full w-2/3">
        <p>Upload images</p>
        <div className="flex gap-6 mt-4 w-full">
          <label htmlFor="image1">
            <img
              src={
                !images.image1
                  ? assets.upload_area
                  : URL.createObjectURL(images.image1)
              }
              alt=""
              className="sm:w-28  "
            />
            <input
              type="file"
              hidden
              id="image1"
              onChange={(e) =>
                setimages({ ...images, image1: e.target.files[0] })
              }
            />
          </label>
          <label htmlFor="image2">
            <img
              src={
                !images.image2
                  ? assets.upload_area
                  : URL.createObjectURL(images.image2)
              }
              alt=""
              className="sm:w-28 "
            />
            <input
              type="file"
              hidden
              id="image2"
              onChange={(e) =>
                setimages({ ...images, image2: e.target.files[0] })
              }
            />
          </label>
          <label htmlFor="image3">
            <img
              src={
                !images.image3
                  ? assets.upload_area
                  : URL.createObjectURL(images.image3)
              }
              alt=""
              className="sm:w-28 "
            />
            <input
              type="file"
              hidden
              id="image3"
              onChange={(e) =>
                setimages({ ...images, image3: e.target.files[0] })
              }
            />
          </label>
          <label htmlFor="image4">
            <img
              src={
                !images.image4
                  ? assets.upload_area
                  : URL.createObjectURL(images.image4)
              }
              alt=""
              className="sm:w-28 "
            />
            <input
              type="file"
              hidden
              id="image4"
              onChange={(e) =>
                setimages({ ...images, image4: e.target.files[0] })
              }
            />
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <p>Product name</p>
        <input
          type="text"
          placeholder="Type here..."
          className="sm:w-[50%] w-3/4 p-2 border-2 outline-[brown]"
          required
          onChange={(e) =>
            setProductInfo({ ...productInfo, name: e.target.value })
          }
          value={productInfo.name}
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <p>Product description</p>
        <textarea
          type="text"
          placeholder="Write your content here....."
          className="sm:w-[50%] w-3/4 p-2 border-2 outline-[brown]"
          required
          onChange={(e) =>
            setProductInfo({ ...productInfo, description: e.target.value })
          }
          value={productInfo.description}
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:gap-6 gap-2 mt-4">
        <div>
          <p className="mb-2">Product category</p>
          <select
            name=""
            id=""
            className="sm:w-48 w-3/4 p-2 border-2 outline-[brown]"
            onChange={(e) =>
              setProductInfo({ ...productInfo, category: e.target.value })
            }
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p className="mb-2">Sub category</p>
          <select
            className="sm:w-48 w-3/4 p-2 border-2 outline-[brown]"
            onChange={(e) =>
              setProductInfo({ ...productInfo, subCategory: e.target.value })
            }
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
        <div>
          <p className="mb-2">Product price</p>
          <input
            type="number"
            placeholder="400"
            className="sm:w-48 w-3/4 p-2 border-2 outline-[brown]"
            required
            onChange={(e) =>
              setProductInfo({ ...productInfo, price: e.target.value })
            }
          />
        </div>
      </div>

      <div className="mt-4">
        <p className="mb-2">Product Sizes</p>
        <div className="flex gap-5 ">
          <div onClick={() => handleSizeSelection("S")}>
            <p
              className={`${
                productInfo.sizes.includes("S")
                  ? "bg-slate-400 border border-slate-500 "
                  : "bg-slate-200"
              } w-10 h-10 flex justify-center items-center font-semibold cursor-pointer p-1`}
            >
              S
            </p>
          </div>
          <div onClick={() => handleSizeSelection("M")}>
            <p
              className={`${
                productInfo.sizes.includes("M")
                  ? "bg-slate-400 border border-slate-500"
                  : "bg-slate-200"
              } w-10 h-10 flex justify-center items-center font-semibold cursor-pointer p-1`}
            >
              M
            </p>
          </div>
          <div onClick={() => handleSizeSelection("L")}>
            <p
              className={`${
                productInfo.sizes.includes("L")
                  ? "bg-slate-400 border border-slate-500"
                  : "bg-slate-200"
              } w-10 h-10 flex justify-center items-center font-semibold cursor-pointer p-1`}
            >
              L
            </p>
          </div>
          <div onClick={() => handleSizeSelection("XL")}>
            <p
              className={`${
                productInfo.sizes.includes("XL")
                  ? "bg-slate-400 border border-slate-500"
                  : "bg-slate-200"
              } w-10 h-10 flex justify-center items-center font-semibold cursor-pointer p-1`}
            >
              XL
            </p>
          </div>
          <div onClick={() => handleSizeSelection("XXL")}>
            <p
              className={`${
                productInfo.sizes.includes("XXL")
                  ? "bg-slate-400 border border-slate-500"
                  : "bg-slate-200"
              } w-10 h-10 flex justify-center items-center font-semibold cursor-pointer p-1`}
            >
              XXL
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-3 mt-4 items-center">
        <input
          type="checkbox"
          className="w-4 p-4 h-4"
          onChange={() =>
            setProductInfo((prev) => ({
              ...prev,
              bestsellor: !prev.bestsellor,
            }))
          }
          checked={productInfo.bestsellor}
        />
        <label htmlFor="bestSeller">Add to bestSeller</label>
      </div>
      <div className="flex w-full mt-2 ">
        <button
          type="submit"
          className="bg-black text-white p-3 rounded-sm active:bg-slate-700 "
        >
          ADD PRODUCT
        </button>
      </div>
    </form>
  );
};

export default AddProduct;
