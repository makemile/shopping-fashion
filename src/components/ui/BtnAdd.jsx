import { PlusCircle } from "../svg/PlusCircle";

export const BtnAdd = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute top-60 right-0 flex justify-center items-center w-56 h-8 text-white  bg-black gap-1 rounded"
    >
      <PlusCircle fillColor="transparent" />
      Add To Cart
    </button>
  );
};
