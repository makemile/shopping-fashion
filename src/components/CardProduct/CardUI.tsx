import React, { useContext } from "react";
import {defaultImages}  from '../../images/default';
import {CheckCircle} from "../svg/CheckCircle";
import {FavoriteProduct} from "../svg/FavoriteProduct";
import {PlusCircle} from "../svg/PlusCircle";
import { Button } from "../ui/Button.js";
import { CardUIProps, Product } from "../../types/dataTypes";
import { ShoppingCartContext } from "../../context";

export const CardUI: React.FC<CardUIProps> = ({
  title,
  images,
  category,
  price,
  showProduct,
  item,
  id,
}) => {
  const context = useContext(ShoppingCartContext);

  if (!context) {
    throw new Error("ShoppingCartContext is not available");
  };

  const {cartProducts} = context;

  const addProductsToCart = (
    event: React.MouseEvent<HTMLButtonElement>,
    productData: Product
  ) => {
    event.preventDefault();
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
  };
  const CheckProduct = (id: number) => {
    return (
      cartProducts.filter((product: { id: number}) => product.id === id).length > 0
    );
  };

  const favoriteProduct = () => {
    return (
      <Button type="button" className="absolute top-0 right-0 items-end justify-end w-8 h-8 px-2 py-2 bg-transparent">
        <FavoriteProduct fillColor="transparent" />
      </Button>
    );
  };

  return (
    <div
      onClick={() => showProduct(item)}
      className="bg-white cursor-pointer w-72 h-auto rounded-lg border border-slate-300"
    >
      <figure className="relative mb-1 w-full aspect-[6/6] overflow-hidden rounded-t-lg bg-slate-200">
        <span className="absolute bottom-0 left-0 backdrop-blur-sm bg-white/30 rounded-lg text-black/80 text-xs m-2 px-3 py-0.5 font-medium">
          {title}
        </span>

        <img
          src={images}
          alt={title}
          className="w-full h-auto object-cover rounded-t-lg"
          referrerPolicy="no-referrer"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = defaultImages;
          }}
          loading="lazy"
          fetchPriority="high"
        />

        {CheckProduct(id)}
        {favoriteProduct()}
      </figure>
      <p className="flex justify-between px-2 items-center">
        <span className="text-sm font-light">{category}</span>
        <span className="text-lg font-semibold">${price}</span>
      </p>

      {CheckProduct(id) ? (
        <div className="flex justify-center p-2">
          <Button type="button" className="justify-center">
            <CheckCircle fillColor="transparent" />
            Added To Cart
          </Button>
        </div>
      ) : (
        <div className="flex justify-center p-2">
          <Button
             onClick={(event: React.MouseEvent<HTMLButtonElement>)  => {
              addProductsToCart(event, item);
            }}
            className="justify-center"
            type="button"
          >
            <PlusCircle fillColor="transparent" />
            Add To Card
          </Button>
        </div>
      )}
    </div>
  );
};