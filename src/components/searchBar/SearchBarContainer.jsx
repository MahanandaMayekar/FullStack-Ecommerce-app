import { useShopContext } from '@/hooks/context/useShopContext'
import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar';
import { useLocation} from 'react-router-dom';


const SearchBarContainer = () => {
    const location = useLocation()
    const [visible, setVisible] = useState()
    const { search, setSearch, showsearchBar, setShowsearchBar } =
        useShopContext();
    function handleCloseSearchBar() {
        setShowsearchBar(false);
    }
    useEffect(() => {
        if (location.pathname.includes("/collection")) {
            setVisible(true)

        } else {
            setVisible(false)
        }
    }, [location]);



    return showsearchBar && visible ? (
        <SearchBar
            search={search}
            setSearch={setSearch}
            setShowsearchBar={setShowsearchBar}
            handleCloseSearchBar={handleCloseSearchBar}
        />
    ) : null;
}

export default SearchBarContainer;
