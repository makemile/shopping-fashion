import { BtnAdd } from "./BtnAdd";
import { BtnCheck } from "./BtnCheck";
import { BtnFavorite } from "./BtnFavorite";

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
    return context.cartProducts.filter((product) => product.id === id).length > 0;

   
  }

  const favoriteProduct = () => {
    return(
     
       <BtnFavorite />
 
    )
   }

  return (
    <div
      onClick={() => showProduct(item)}
      className="bg-white cursor-pointer w-72 h-auto rounded-lg border border-slate-300"
    >
      <figure className="relative mb-1 w-full">
        <span className="absolute bottom-0 left-0 backdrop-blur-sm bg-white/30 rounded-lg text-black/80 text-xs m-2 px-3 py-0.5 font-medium">
          {title}
        </span>
        <img
          src={images}
          alt={title}
          className="w-full h-auto object-cover rounded-t-lg"
          referrerPolicy="no-referrer"
        />
       { CheckProduct(id)}
        {favoriteProduct()}
      
      </figure>
      <p className="flex justify-between px-1 items-center">
        <span className="text-sm font-light">{category}</span>
        <span className="text-lg font-semibold">${price}</span>
      </p>
      {
        CheckProduct(id) ? (
          <div className="flex justify-center">
            <BtnCheck/>
          </div>
        ) : (
          <div className="flex justify-center">
            <BtnAdd onClick={(event) => addProductsToCart(event, item)} />
          </div>
        )
      }
    </div>
  );
};
