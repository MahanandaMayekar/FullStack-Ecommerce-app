import LatestProductItem from "@/components/LatestProductItem";

import { FaChevronDown } from "react-icons/fa";
import Title from "../../components/Title";

const Collections = ({
  handleOnclick,
  handleToggle,
  showFilter,
  filteredProducts,
  setSortType,
  handleType,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 pt-10 border-t mb-9">
      <div className="min-w-60">
        <div className="flex px-10 items-center gap-1">
          <p className="cursor-pointer my-2 text-3xl  " onClick={handleOnclick}>
            FILTERS
          </p>
          <FaChevronDown
            size={22}
            className={`sm:hidden block text-gray-400 pt-1 ${
              showFilter ? "-rotate-90" : ""
            }`}
          />
        </div>
        <div
          className={`border border-grey bg-gray-100/50 py-3 px-10 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="text-md mb-3">CATEGORIES</p>
          <div className="flex flex-col gap-3 justify-start text-sm text-gray-500 ">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Men"}
                onChange={handleToggle}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Women"}
                onChange={handleToggle}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Kids"}
                onChange={handleToggle}
              />
              Kids
            </p>
          </div>
        </div>

        <div
          className={`border border-grey bg-gray-100/50 py-3 px-10 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="text-md mb-3">TYPE</p>
          <div className="flex flex-col gap-3 justify-start text-sm text-gray-500 ">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Topwear"}
                onChange={handleType}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Bottomwear"}
                onChange={handleType}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Winterwear"}
                onChange={handleType}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/**right side */}
      <div className="flex-1">
        <div className="">
          <div className="py-4 flex justify-between">
            <Title text1={"ALL"} text2={"COLLECTIONS"} />
            <div className="">
              <select
                onChange={(e) => setSortType(e.target.value)}
                className="bg-slate-100 text-center p-3"
              >
                <option value="Low to High">Sort by :Low to High</option>
                <option value="High to Low">Sort by :High to Low</option>
                <option value="Relavent">Sort by :Relavent</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-8">
            {filteredProducts.map((item) => (
              <LatestProductItem
                key={item._id} // Add a unique key here
                productId={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
