import { ShoppingCartContext } from "../../context";
import { CloseCircle } from "../svg/CloseCircle";
import "./styles.css";
import { useContext } from "react";
export const PorductDetail = ({children}) => {
  const context = useContext(ShoppingCartContext);
    return  (
    <aside
      className={`${context.isProductDetailOpen ? "flex" : "hidden"} product-detail flex-col fixed right-0 top-14 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
       <div className= "cursor-pointer" onClick = {() => context.CloseProductDetail()}>
       <CloseCircle  className= "text-xl cursor-pointer" fillColor="white"/>
       </div>
         
       
      </div>
      {children}
    </aside>
  );
};
