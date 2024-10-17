import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../context";
import { ShoppingBag } from "../svg/ShoppingBag";
import { useContext } from "react";

export const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const openCart = (event) => {
    event.stopPropagation();
    event.preventDefault();
    context.openCheckoutSideMenu();
  };

  const signOut = localStorage.getItem('sign-out');
  const parsedSignOut = JSON.parse(signOut);
  const isUserSignOut = context.signOut || parsedSignOut;

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true);
    localStorage.setItem('sign-out', stringifiedSignOut);
    context.setSignOut(true);
  };

  const getNavLinkStyle = ({isActive}) =>  isActive ? { textDecoration: 'underline', textUnderlineOffset: '4px' } : {}

  const renderView = () => {
    if (isUserSignOut) {
      return (
        <li>
          <NavLink
            to='/sign-in'
            onClick={() => handleSignOut()}
            style = {getNavLinkStyle}
          >
            Sign out
          </NavLink>
        </li>
      );
    } else {
      return (
        <>
          <li className="text-black/60">luis@gmail.com</li>
          <li>
            <NavLink to="/my-orders" style = {getNavLinkStyle}>
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink to="my-account" style = {getNavLinkStyle}>
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/sign-in'
              style = {getNavLinkStyle}
              onClick={() => handleSignOut()}
            >
              Sign out
            </NavLink>
          </li>
        </>
      );
    }
  };

  return (
    <nav
      className="flex justify-between items-center bg-black
     fixed z-10 w-full h-16  px-16 text-dm font-light top-0 text-white"
    >
      <ul className="flex items-center gap-4">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink to="/" style = {getNavLinkStyle}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to="/Clothes" style = {getNavLinkStyle}>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink to="/Electronics" style = {getNavLinkStyle}>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink to="/Furniture" style = {getNavLinkStyle}>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink to="/Miscellaneous" style = {getNavLinkStyle}>
            Miscellaneous
          </NavLink>
        </li>
        <li>
          <NavLink to="/Shoes" style = {getNavLinkStyle}>
            Shoes
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-4">
        {renderView()}
        <li
          className="flex gap-1 cursor-pointer"
          onClick={(event) => openCart(event)}
        >
          <ShoppingBag fillColor="transparent" />
          {context.count}
        </li>
      </ul>
    </nav>
  );
};
