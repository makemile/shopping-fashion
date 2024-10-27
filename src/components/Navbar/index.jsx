import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../context";
import { ShoppingBag } from "../svg/ShoppingBag";
import { useContext, useState } from "react";
import { BurgerNav } from "../svg/BurgerNav";
import { Button } from "../ui/Button";
import { CloseCircle } from "../svg/CloseCircle";

const NavLinks = () => {
  const context = useContext(ShoppingCartContext);
  const openCart = (event) => {
    event.stopPropagation();
    event.preventDefault();
    context.openCheckoutSideMenu();
  };

  const signOut = localStorage.getItem("sign-out");
  const parsedSignOut = JSON.parse(signOut);
  const isUserSignOut = context.signOut || parsedSignOut;

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true);
    localStorage.setItem("sign-out", stringifiedSignOut);
    context.setSignOut(true);
  };

  const getNavLinkStyle = ({ isActive }) =>
    isActive ? { textDecoration: "underline", textUnderlineOffset: "4px" } : {};

  const renderView = () => {
    if (isUserSignOut) {
      return (
        <li className="list-none">
          <NavLink
            to="/sign-in"
            onClick={() => handleSignOut()}
            style={getNavLinkStyle}
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
            <NavLink to="/my-orders" style={getNavLinkStyle}>
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink to="my-account" style={getNavLinkStyle}>
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sign-in"
              style={getNavLinkStyle}
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
    <>
      <NavLink to="/" style={getNavLinkStyle}>
        All
      </NavLink>

      <NavLink to="/Clothes" style={getNavLinkStyle}>
        Clothes
      </NavLink>

      <NavLink to="/Electronics" style={getNavLinkStyle}>
        Electronics
      </NavLink>

      <NavLink to="/Furniture" style={getNavLinkStyle}>
        Furnitures
      </NavLink>

      <NavLink to="/Miscellaneous" style={getNavLinkStyle}>
        Miscellaneous
      </NavLink>

      <NavLink to="/Shoes" style={getNavLinkStyle}>
        Shoes
      </NavLink>

     <div>
     {renderView()}
     </div>
      <li
        className="flex gap-1 cursor-pointer list-none"
        onClick={(event) => openCart(event)}
      >
        <ShoppingBag fillColor="transparent" />
        {context.count}
      </li>
    </>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };



  return (
    <>
      <nav className="flex w-9/12 justify-end">
        <div className="hidden gap-3 md:flex">
          <NavLinks />
        </div>
          <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? <Button><CloseCircle /></Button> : <BurgerNav />}
          </button>
          </div>
      
      </nav>
      {isOpen && (<div className="flex basis-full flex-col items-center"><NavLinks/></div>)}
    </>
  );
};
