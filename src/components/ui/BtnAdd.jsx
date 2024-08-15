import { PlusCircle } from "../svg/PlusCircle";
import "../ui/index.css"

export const BtnAdd = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex justify-center items-center btn-w h-10 text-white  bg-black gap-1 rounded-b-lg"
    >
      <PlusCircle fillColor="transparent" />
      Add To Cart
    </button>
  );
};
