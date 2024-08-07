import { BtnDelete } from "../ui/BtnDelete";

export const OrderCard = ({ title, images, price, id , HandleDelete}) => {
  
  return (
    <>
      <div className="flex justify-around items-center p-6 gap-1">
        <figure className="flex justify-around items-center gap-2">
          <img
            className="w-10 h-10 rounded-lg object-cover"
            src={images}
            alt={title}
            referrerPolicy="no-referrer"
          />
          <figcaption className="text-xs w-40">{title}</figcaption>
          <h5 className="text-sm font-bold">{price}</h5>
        </figure>
        <BtnDelete onClick={() => {HandleDelete(id)}}/>
      </div>
    </>
  );
};
