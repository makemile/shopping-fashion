import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../context";
import { ShoppingBag } from "../svg/ShoppingBag";
import { useContext, useState } from "react";
import { BurgerNav } from "../svg/BurgerNav";
import { Button } from "../ui/Button.jsx";
import { CloseCircle } from "../svg/CloseCircle";
import React from "react";

const NavLinks = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) return null;
  const openCart = (event: any) => {
    event.stopPropagation();
    event.preventDefault();
    context.openCheckoutSideMenu();
  };

  const signOut = localStorage.getItem("sign-out") ?? "";
  const parsedSignOut = JSON.parse(signOut);
  const isUserSignOut = context.signOut || parsedSignOut;
  const account = localStorage.getItem("account") ?? "";
  const formValues = JSON.parse(account);

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true);
    localStorage.setItem("sign-out", stringifiedSignOut);
    context.setSignOut(true);
  };

  const getNavLinkStyle = ({ isActive }: any) =>
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
        <div className="flex gap-5 items-center">
          <li className="text-white list-none">{formValues.email}</li>
          <li className="list-none">
            <NavLink to="/my-orders" style={getNavLinkStyle}>
              My Orders
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink to="my-account" style={getNavLinkStyle}>
              My Account
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink
              to="/sign-in"
              style={getNavLinkStyle}
              onClick={() => handleSignOut()}
            >
              Sign out
            </NavLink>
          </li>
        </div>
      );
    }
  };
  return (
    <>
      <NavLink to="/" style={getNavLinkStyle}>
        All
      </NavLink>

      <NavLink to="/clothes" style={getNavLinkStyle}>
        Clothes
      </NavLink>

      <NavLink to="/electronics" style={getNavLinkStyle}>
        Electronics
      </NavLink>

      <NavLink to="/furniture" style={getNavLinkStyle}>
        Furnitures
      </NavLink>

      <NavLink to="/miscellaneous" style={getNavLinkStyle}>
        Miscellaneous
      </NavLink>

      <NavLink to="/shoes" style={getNavLinkStyle}>
        Shoes
      </NavLink>

      <div>{renderView()}</div>
      <li className="list-none">
        <button
          type="button"
          onClick={openCart}
          aria-label="Open shopping cart"
          className="flex gap-1 items-center cursor-pointer
               focus:outline-none focus:ring-2 focus:ring-white"
        >
          <ShoppingBag fillColor="transparent" aria-hidden="true" />
          <span aria-hidden="true">{context.count}</span>
          <span className="sr-only">{context.count} items in cart</span>
        </button>
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
      <nav className="flex w-11/12 justify-end">
        <div className="hidden gap-3 md:flex items-center">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? (
              <Button>
                <CloseCircle />
              </Button>
            ) : (
              <BurgerNav />
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex basis-full flex-col items-center">
          <NavLinks />
        </div>
      )}
    </>
  );
};
