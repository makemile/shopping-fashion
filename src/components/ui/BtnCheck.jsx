import { CheckCircle } from "../svg/CheckCircle";

export const BtnCheck = () => {
    return (
      <button
        type="button"
        className="absolute top-60 right-0 flex justify-center items-center w-56 h-8 text-white  bg-black gap-2 rounded"
      >
      
        <CheckCircle fillColor="transparent"/>
        Added To Cart
      </button>
    );
  };