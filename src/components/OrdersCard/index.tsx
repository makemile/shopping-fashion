import { currentDate } from "../../utils";
import { Calendar } from "../svg/Calendar";
import { ShoppingBag } from "../svg/ShoppingBag";
export const OrdersCard = ({ count, price }) => {
  return (
    <div className="flex items-center mb-3 border justify-center border-black rounded-lg w-80 h-16">
      <div className="flex justify-between w-4/5 h-12">
        <div className="flex flex-col items-start">
        <span className="font-light flex gap-1"><Calendar fillcolor="transparent"/>{currentDate()}</span>
        <span className="font-light flex gap-1"><ShoppingBag fillColor="white"/>{count}</span>
        </div>
        <span className="font-medium text-lg">${price}</span>
      </div>
    </div>
  );
};
