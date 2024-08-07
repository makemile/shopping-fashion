import { ShoppingCartContext } from "../../context";
import { OrderCard } from "../OrderCard";
import { CloseCircle } from "../svg/CloseCircle";
import { useContext } from "react";

export const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed right-0 top-14 border border-black rounded-lg bg-white`}
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
     <div className="overflow-y-auto h-96">
     {context.cartProducts.map((product) => (
        <OrderCard
          key={product.id}
          title={product.title}
          price={product.price}
          images={product.images[0]}
        />
      ))}
     </div>
    </aside>
  );
};
