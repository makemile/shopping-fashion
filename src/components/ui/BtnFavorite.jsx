import { FavoriteProduct } from "../svg/FavoriteProduct";

export const BtnFavorite = () => {
  return (
    <button
      type="button"
      className="absolute top-0 right-0 flex items-end w-8 h-8"
    >
      <FavoriteProduct fillColor="transparent" />
    </button>
  );
};
