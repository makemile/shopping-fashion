import { PlusCircle } from "../svg/PlusCircle";

export const BtnAdd = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute top-0 right-0 flex justify-center items-center w-7 h-7 rounded-full m-2"
    >
      <PlusCircle fillColor="white" />
    </button>
  );
};
