import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../context";
import { OrderCard } from "../OrderCard";
import { CloseCircle } from "../svg/CloseCircle";
import { TotalPrice } from "../../utils";

export const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) return null;
  const HandleDelete = (id: number | string) => {
    const filterProducts = context.cartProducts.filter(
      (product) => product.id !== id,
    );
    context.setCartProducts(filterProducts);
    context.setCount(context.count - 1);
  };
  const HandleCheckout = async () => {
    console.log("Enviando al carrito:", context.cartProducts);
    try {
      const response = await fetch(
        "http://localhost:3000/create-payment-intent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            items: context.cartProducts.map((p) => ({
              id: p?.id,
              title: p?.title,
              price: p?.price,
              quantity: 1,
            })),
          }),
        },
      );

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Error al procesar el pago:", error);
    }
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } flex-col fixed right-2 top-16 border border-black rounded-lg bg-white checkout-side-menu`}
    >
      <div className="flex justify-between items-center py-10 pl-6 pr-1.2">
        <h2 className="font-medium text-xl">My Orders</h2>
        <div
          className="cursor-pointer"
          onClick={() => context.CloseCheckoutSideMenu()}
        >
          <CloseCircle className="text-xl cursor-pointer" fillColor="white" />
        </div>
      </div>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
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
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="px-2.5 py-1">
        <p className="flex justify-between">
          <span className="text-md font-semibold">Total</span>
          <span className="font-bold">${TotalPrice(context.cartProducts)}</span>
        </p>
      </div>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      {context.signOut ? (
        <NavLink to={"sign-in"} className="flex justify-center p-4">
          <button className="bg-black text-md text-white rounded-md w-full h-11">
            Please Login
          </button>
        </NavLink>
      ) : (
        <NavLink
          to={"/my-orders/last"}
          className="flex justify-center py-3.5 px-2"
        >
          <button
            onClick={() => {
              HandleCheckout();
            }}
            className="bg-black text-md text-white rounded-md w-full h-11"
          >
            Checkout
          </button>
        </NavLink>
      )}
    </aside>
  );
};
