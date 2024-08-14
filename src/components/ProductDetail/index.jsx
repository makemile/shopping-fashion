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
      } product-detail flex-col fixed top-14 border rounded-lg bg-white place-content-evenly gap-4 py-4 `}
    >
      <div className="flex justify-end items-center px-12">
        <div
          className="cursor-pointer"
          onClick={() => context.CloseProductDetail()}
        >
          <CloseCircle className="text-xl cursor-pointer" fillColor="white" />
        </div>
      </div>
      <figure className="flex grid-flow-col p-2 place-content-evenly">
        {context.productToShow.images && (
          <img
            className="w-90 h-80  rounded-lg cursor-zoom-in"
            src={context.productToShow.images[0]}
            alt={context.productToShow.title}
          />
        )}

        <figcaption className="w-48 row-auto">
          <h1 className="font-semibold text-lg font-sans">
            {context.productToShow.title}
          </h1>
          <h5 className="text-lg font-medium py-4">
            ${context.productToShow.price}
          </h5>
          {context.productToShow.category && (
            <h5 className="text-sm font-medium py-4 font-sans">
              Category: {context.productToShow.category.name}
            </h5>
          )}
        </figcaption>
      </figure>
      <article className="text-wrap py-1 px-12">
        <h3 className="font-medium">DESCRIPTION</h3>
        <p className="font-sans text-sm">{context.productToShow.description}</p>
      </article>
    </aside>
  );
};
