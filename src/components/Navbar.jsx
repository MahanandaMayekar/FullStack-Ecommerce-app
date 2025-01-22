import { useAssets } from '../hooks/assets/useAssets'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    const{assets}=useAssets()
    return (
      <div className="flex item center justify-between font-medium py-5">
        <img src={assets.logo} alt="" className="w-36" />
        <ul className="hidden sm:flex gap-5 text-sm text-black">
          <NavLink to="/" className="flex items-center gap-1 flex-col">
            <p>HOME</p>
            <hr className="w-3/4 h-0.5 bg-black hidden " />
          </NavLink>
          <NavLink
            to="/collection"
            className="flex items-center gap-1 flex-col"
          >
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
      </div>
    );
}