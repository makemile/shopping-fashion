import { CheckCircle } from "../svg/CheckCircle";

export const BtnCheck = () => {
    return (
      <button
        type="button"
        className="absolute top-0 right-0 flex justify-center items-center w-7 h-7 rounded-full m-2"
      >
        <CheckCircle fillColor="transparent"/>
      </button>
    );
  };