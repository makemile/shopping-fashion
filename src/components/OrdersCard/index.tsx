import React from "react";
import { currentDate } from "../../utils";
import { Calendar } from "../svg/Calendar";
import { ShoppingBag } from "../svg/ShoppingBag";
import { OrdersCardProps } from "../../types/dataTypes";
export const OrdersCard = ({ count, price, title }: OrdersCardProps) => {
  return (
    <div className="flex items-center px-12 py-3 border justify-center border-grey rounded-lg w-full h-auto">
      <div className="flex justify-between w-full h-auto">
        <div className="flex flex-col items-start gap-1">
          <span className="font-light flex gap-1">Orden #8821</span>
          <span className="font-light flex gap-1">
            <Calendar fillcolor="transparent" />
            {currentDate()}
          </span>
          <span className="font-light flex gap-1">
            <ShoppingBag fillColor="white" />
            {count}
          </span>
          <span className="font-light flex gap-1">{title}</span>
          <span className="font-medium text-lg">Subtotal ${price}</span>
          <span className="font-light flex gap-1">Método: Tarjeta de Crédito (Stripe)</span>
        </div>
         <span className="font-medium text-lg">Confirmafo</span>
      </div>
     
    </div>
  );
};
