import { BtnAdd } from "./BtnAdd";
import { PlusCircle } from "../svg/PlusCircle";

export const CardUI = ({
  title,
  image,
  category,
  price,
  context,
  showProduct,
  item,
}) => {
  const addProductsToCart = (productData) => {
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
  };
  return (
    <div
      onClick={() => showProduct(item)}
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {title}
        </span>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
        <div>
          <BtnAdd onClick={() => addProductsToCart(item)}/>
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{category}</span>
        <span className="text-lg font-semibold">{price}</span>
      </p>
    </div>
  );
};
