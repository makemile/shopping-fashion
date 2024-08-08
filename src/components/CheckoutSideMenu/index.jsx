import { useContext } from "react";
import {Link} from "react-router-dom";
import { ShoppingCartContext } from "../../context";
import { OrderCard } from "../OrderCard";
import { CloseCircle } from "../svg/CloseCircle";
import { TotalPrice } from "../../utils";
import "./styles.css";

export const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  const HandleDelete = (id) => {
    const filterProducts = context.cartProducts.filter(
      (product) => product.id !== id
    );
    context.setCartProducts(filterProducts);
    context.setCount(context.count - 1);
  };
  const HandleCheckout = () => {
    const orderToAdd = {
      date: "01.02.23",
      product: context.cartProducts,
      count: context.cartProducts.length,
      price: TotalPrice(context.cartProducts),
    };
    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
  };
  return (
    <aside
    className={`${
      context.isCheckoutSideMenuOpen ? "flex" : "hidden"
    } checkout-side-menu flex-col fixed right-0 top-16 border border-black rounded-lg bg-white`}
  
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Orders</h2>
        <div
          className="cursor-pointer"
          onClick={() => context.CloseCheckoutSideMenu()}
        >
          <CloseCircle className="text-xl cursor-pointer" fillColor="white" />
        </div>
      </div>
      <div className="overflow-y-auto flex-1">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            images={product.images[0]}
            HandleDelete={HandleDelete}
          />
        ))}
      </div>
      <div className="px-6 py-6">
        <p className="flex justify-between">
          <span className="text-md font-semibold">Total</span>
          <span className="font-bold">${TotalPrice(context.cartProducts)}</span>
        </p>
      </div>
    
     <Link to="/my-orders/last" className="flex justify-center p-4">
     <button onClick={() => {HandleCheckout()}} className="bg-black text-md text-white rounded-md w-1/2 p-2">checkout</button>
     </Link>
      
    </aside>
  );
};
