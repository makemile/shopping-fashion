import { PlusCircle } from "../svg/PlusCircle";
import "../ui/index.css";

export const Button = ({ onClick, children, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center btn-w h-11 text-white bg-black gap-1 rounded-md ${className}`}
    >
      {children}
    </button>
  );
};
