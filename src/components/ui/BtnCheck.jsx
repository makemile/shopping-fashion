import { CheckCircle } from "../svg/CheckCircle";

export const BtnCheck = () => {
    return (
      <button
        type="button"
        className="flex justify-center items-center btn-w h-10 text-white  bg-black gap-1 rounded-sm"
      >
      
        <CheckCircle fillColor="transparent"/>
        Added To Cart
      </button>
    );
  };