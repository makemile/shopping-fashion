import { ShoppingCartContext } from "../../context";
import { ShoppingBag } from "../svg/ShoppingBag";
import { NavItem } from "./Navitem";
import { useContext } from "react";
export const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4";
  return (
    <nav className="flex justify-between items-center fixed z-10 w-full  px-8 text-dm font-light top-0">
      <ul className="flex items-center gap-2">
        <li className="font-semibold text-lg">
          <NavItem to="/">Shopi</NavItem>
        </li>
        <li>
          <NavItem to="/" activeStyle={activeStyle}>
            All
          </NavItem>
        </li>
        <li>
          <NavItem to="/Clothes" activeStyle={activeStyle}>
            Clothes
          </NavItem>
        </li>
        <li>
          <NavItem to="/Electronics" activeStyle={activeStyle}>
            Electronics
          </NavItem>
        </li>
        <li>
          <NavItem to="/Furniture" activeStyle={activeStyle}>
            Furnitures
          </NavItem>
        </li>
        <li>
          <NavItem to="/Miscellaneous" activeStyle={activeStyle}>
            Miscellaneous
          </NavItem>
        </li>
        <li>
          <NavItem to="/Shoes" activeStyle={activeStyle}>
            Shoes
          </NavItem>
        </li>
      </ul>
      <ul className="flex items-center gap-2">
        <li className="text-black/60">luis@gmail.com</li>
        <li>
          <NavItem to="/my-orders" activeStyle={activeStyle}>
            My Orders
          </NavItem>
        </li>
        <li>
          <NavItem to="my-account" activeStyle={activeStyle}>
            My Account
          </NavItem>
        </li>
        <li>
          <NavItem to="/sign-in" activeStyle={activeStyle}>
            Sign In
          </NavItem>
        </li>
        <li className="flex gap-1">
          <ShoppingBag fillColor="white" />
          {context.count}
        </li>
      </ul>
    </nav>
  );
};
