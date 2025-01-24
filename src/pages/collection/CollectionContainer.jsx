import React from "react";
import Collections from "./Collections";
import { useAssets } from "@/hooks/assets/useAssets";
import { useEffect, useState } from "react";
import { useShopContext } from '@/hooks/context/useShopContext';
const CollectionContainer = () => {
    const { products } = useAssets();
    const [showFilter, setShowFilter] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [type, setType] = useState([]);
    const [sortType, setSortType] = useState("Relavent");
    const { search, showsearchBar } = useShopContext();

    useEffect(() => {
      applyFilter();
    }, [category, type, search, showsearchBar]);
    useEffect(() => {
        sortProducts();
    }, [sortType]);
    function handleOnclick() {
        setShowFilter(!showFilter);
    }
    function handleToggle(e) {
        if (category.includes(e.target.value)) {
            setCategory((prev) => prev.filter((item) => item !== e.target.value));
        } else {
            setCategory((prev) => [...prev, e.target.value]);
        }
    }

    function handleType(e) {
        if (type.includes(e.target.value)) {
            setType((prev) => prev.filter((item) => item !== e.target.value));
        } else {
            setType((prev) => [...prev, e.target.value]);
        }
    }

    function applyFilter() {
        let productCopy = products.slice();

        if (type.length > 0) {
            productCopy = productCopy.filter((item) =>
                type.includes(item.subCategory)
            );
        }
        if (category.length > 0) {
            productCopy = productCopy.filter((item) =>
                category.includes(item.category)
            );
        }
        if (search && showsearchBar) {
            productCopy=productCopy.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()))
        }

        setFilteredProducts(productCopy);
    }
    const sortProducts = () => {
        let filterProductCopy = filteredProducts.slice();

        switch (sortType) {
            case "Low to High":
                setFilteredProducts(
                    filterProductCopy.sort((a, b) => a.price - b.price)
                );
                break;
            case "High to Low":
                setFilteredProducts(
                    filterProductCopy.sort((a, b) => b.price - a.price)
                );
                break;
            default:
                applyFilter();
                break;
        }
    };
    return (
        <Collections
            handleOnclick={handleOnclick}
            handleToggle={handleToggle}
            filteredProducts={filteredProducts}
            setType={setType}
            setSortType={setSortType}
            handleType={handleType}
        />
    );
};

export default CollectionContainer;
