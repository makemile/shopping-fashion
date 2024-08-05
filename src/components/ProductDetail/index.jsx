import { ShoppingCartContext } from "../../context";
import { CloseCircle } from "../svg/CloseCircle";
import "./styles.css";
import { useContext } from "react";
export const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } product-detail flex-col fixed right-0 top-14 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div
          className="cursor-pointer"
          onClick={() => context.CloseProductDetail()}
        >
          <CloseCircle className="text-xl cursor-pointer" fillColor="white" />
        </div>
      </div>
      <figure className="flex justify-around items-center">
        <img
        className="w-10 h-10 overflow-auto rounded-lg"
          src={context.productToShow.image}
          alt={context.productToShow.title}
        />
        <figcaption className="text-xs w-40">{context.productToShow.title}</figcaption>
        <h5 className="text-sm font-bold">{context.productToShow.price}</h5>
      </figure>
    </aside>
  );
};
