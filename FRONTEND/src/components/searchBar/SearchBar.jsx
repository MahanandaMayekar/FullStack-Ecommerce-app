import { useAssets } from '@/hooks/assets/useAssets';
import React from 'react'

const SearchBar = ({
  search,
  setSearch,
    handleCloseSearchBar,
  
}) => {
  const { assets } = useAssets();
  
  return (
    <div className="flex justify-center items-center gap-4 p-1 ml-2 mr-2 mb-4 rounded-sm">
      <div className="inline-flex items-center rounded-full w-1/2gap-4 sm:w-1/2 justify-between bg-slate-200">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" bg-inherit m-2  pl-4 text-black w-full outline-none text-xl"
          placeholder="search..."
        />
        <img src={assets.search_icon} alt="" className="w-4 m-3 " />
      </div>
      <img
        src={assets.cross_icon}
        alt=""
        className="h-4 "
        onClick={handleCloseSearchBar}
      />
    </div>
  );
};

export default SearchBar
