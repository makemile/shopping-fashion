import { BtnDelete } from "../ui/BtnDelete";

export const OrderCard = ({ title, images, price, id , HandleDelete}) => {
  
  return (
    <>
      <div className="flex justify-around items-center p-1 gap-1">
        <figure className="flex justify-around items-center gap-2 w-96">
          <img
            className="w-16 h-16 rounded-lg object-cover"
            src={images}
            alt={title}
            referrerPolicy="no-referrer"
          />
          <figcaption className="text-sm w-48">{title}</figcaption>
          <h5 className="text-sm font-bold">{price}</h5>
        </figure>
       {
        HandleDelete &&
         <BtnDelete onClick={() => {HandleDelete(id)}}/>
       }
      </div>
    </>
  );
};
