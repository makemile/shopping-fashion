import React, { useState } from "react";
import "./styles.css";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../context";
import { OrderCard } from "../OrderCard";
import { CloseCircle } from "../svg/CloseCircle";
import { TotalPrice } from "../../utils";

export const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  const [loading, setLoading] = useState(false);
  if (!context) return null;

  const HandleDelete = (id: number | string) => {
    const filterProducts = context.cartProducts.filter(
      (product) => product.id !== id,
    );
    context.setCartProducts(filterProducts);
    context.setCount(context.count - 1);
  };
  const HandleCheckout = async () => {
    const isCartEmpty = context?.cartProducts.length === 0;
    const isButtonDisabled = isCartEmpty || loading;
    setLoading(true);
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
    try {
      const response = await fetch(`${API_URL}/create-payment-intent`, {
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
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Error al procesar el pago:", error);
      setLoading(false);
    }
  };
console.log(loading ,'loading ')
  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } flex-col fixed right-2 top-24 border border-black rounded-lg bg-white checkout-side-menu z-20`}
    >
      <div className="flex justify-between items-center py-6 px-2 pl-6 pr-1.2">
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
        <div className="relative group flex flex-col py-3.5 px-2">
          {/* TOOLTIP: Solo si el carrito está vacío */}
          {context.cartProducts.length === 0 && (
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-30">
              El carrito está vacío
            </span>
          )}

          <NavLink
            to={"/my-orders/last"}
            className={`flex justify-center w-full ${(context.cartProducts.length === 0 || loading) ? "pointer-events-none" : ""}`}
          >
            <button
              disabled={context.cartProducts.length === 0 || loading}
              onClick={() => {
                HandleCheckout();
              }}
              /* Estilos de tu botón original + el estado disabled */
              className={`text-md rounded-md w-full h-11 transition-all ${
                (context.cartProducts.length === 0 || loading)
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-black text-white hover:bg-gray-900"
              }`}
            >
              {loading ? (
                <div className="flex flex-col items-center justify-center leading-tight">
                  {/* Tu SVG de Spinner (mantenlo igual) */}
                  <svg
                    className="animate-spin h-5 w-5 text-white mb-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span className="text-[8px] font-bold">
                    El servidor está despertando, espera unos segundos...
                  </span>
                </div>
              ) : (
                <span className="text-md font-medium">Checkout</span>
              )}
            </button>
          </NavLink>
        </div>
      )}
    </aside>
  );
};
