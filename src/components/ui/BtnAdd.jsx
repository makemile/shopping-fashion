import { PlusCircle } from "../svg/PlusCircle";
import "../ui/index.css"

export const BtnAdd = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex justify-center items-center btn-w h-11 text-white  bg-black gap-1 rounded-md"
    >
      <PlusCircle fillColor="transparent" />
      Add To Cart
    </button>
  );
};
