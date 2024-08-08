import { BtnAdd } from "./BtnAdd";
import { BtnCheck } from "./BtnCheck";

export const CardUI = ({
  title,
  images,
  category,
  price,
  context,
  showProduct,
  item,
  id,
}) => {
  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
    context.openCheckoutSideMenu();
  };

  const CheckProduct = (id) => {
    const isCheckProduct =
      context.cartProducts.filter((product) => product.id === id).length > 0;

    return isCheckProduct ? (
      <div>
        <BtnCheck/>
      </div>
    ) : (
      <div>
        <BtnAdd onClick={(event) => addProductsToCart(event, item)} />
      </div>
    );
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
          src={images}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
          referrerPolicy="no-referrer"
        />
        {CheckProduct(id)}
      
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{category}</span>
        <span className="text-lg font-semibold">{price}</span>
      </p>
    </div>
  );
};
