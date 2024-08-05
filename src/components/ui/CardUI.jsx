import { BtnAdd } from "./BtnAdd";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";

export const CardUI = ({ title, image, category, price }) => {
  const context = useContext(ShoppingCartContext);
  return(
    <div onClick={() => context.openProductDetail()} className="bg-white cursor-pointer w-56 h-60 rounded-lg">
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
          <BtnAdd onClick={() => context.setCount(context.count + 1)} />
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{category}</span>
        <span className="text-lg font-semibold">{price}</span>
      </p>
    </div>
  );
};
