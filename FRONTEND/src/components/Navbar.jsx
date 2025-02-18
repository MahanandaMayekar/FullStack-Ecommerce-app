import { useAssets } from "../hooks/assets/useAssets";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { BsCart4 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useShopContext } from "@/hooks/context/useShopContext";
import useCart from "@/hooks/context/useCart";
import useAuth from "@/hooks/auth/useAuth";
import { toast } from "react-toastify";

export const Navbar = () => {
  const { logOut,auth} = useAuth();
  const { assets } = useAssets();
  const navigate = useNavigate();
  const location = useLocation();
  const { getTotalProductsInCart } = useCart();
  const { setShowsearchBar, showsearchBar } = useShopContext();
  function handleOnclick() {
    navigate("/");
  }
  function handleDiaplySearchBar() {
    setShowsearchBar(!showsearchBar);
    if (!location.pathname.includes("/collection")) {
      navigate("/collection");
    }
  }

  function handleLogout() {
    logOut();
    navigate("/login");
    toast.success("Successfully logged out");
  }
  return (
    <div className="flex item center justify-between font-medium py-5 ">
      <img src={assets.logo} alt="" className="w-36" onClick={handleOnclick} />
      <ul className="hidden sm:flex gap-5 text-sm text-black">
        <NavLink to="/" className="flex items-center gap-1 flex-col">
          <p>HOME</p>
          <hr className="w-3/4 h-0.5 bg-black hidden " />
        </NavLink>
        <NavLink to="/collection" className="flex items-center gap-1 flex-col">
          <p>COLLECTIONS</p>
          <hr className="w-3/4 h-0.5 bg-black hidden " />
        </NavLink>
        <NavLink to="/about" className="flex items-center gap-1 flex-col">
          <p>ABOUT</p>
          <hr className="w-3/4 h-0.5 bg-black  hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex items-center gap-1 flex-col">
          <p>CONTACT</p>
          <hr className="w-3/4 h-0.5 bg-black  hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6 justify-center cursor-pointer ">
        <IoSearch size="25" onClick={handleDiaplySearchBar} />
        <div className="group relative">
          <Menubar className=" ">
            <MenubarMenu>
              <MenubarTrigger>
                <CgProfile size="25" />
                <span className="pl-3 font-semibold">Login</span>
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem onClick={() => navigate("/login")}>
                  Login{" "}
                </MenubarItem>

                {auth?.token ? (
                  <>
                    <MenubarItem onClick={() => navigate("/orders")}>
                      My Orders
                    </MenubarItem>
                    <MenubarItem>My Profile</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem onClick={handleLogout}>Logout</MenubarItem>
                  </>
                ) : (
                  <></>
                )}
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
        <NavLink to="/cart" className="relative">
          <BsCart4 size="25" />
          <p className="absolute right-[-5px] bottom-[-5px]  w-5  text-center bg-black text-white rounded-full text-[10.5px] ">
            {getTotalProductsInCart()}
          </p>
        </NavLink>

        {/*hamburger for small screens*/}
        <div className="group relative sm:hidden">
          <Menubar className="border-none ">
            <MenubarMenu>
              <MenubarTrigger>
                <GiHamburgerMenu className="sm:hidden" size="25" />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <NavLink to="/" className="hover:font-bold">
                    Home
                  </NavLink>
                </MenubarItem>
                <MenubarItem>
                  <NavLink to="/collection" className="hover:font-bold">
                    Collections
                  </NavLink>
                </MenubarItem>
                <MenubarItem>
                  <NavLink to="/about" className="hover:font-bold">
                    About
                  </NavLink>
                </MenubarItem>
                <MenubarItem>
                  <NavLink to="/contact" className="hover:font-bold">
                    Contact
                  </NavLink>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </div>
  );
};
