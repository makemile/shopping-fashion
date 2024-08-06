import { DeleteProduct } from "../svg/Trash";

export const OrderCard = ({ title, image, price }) => {
  return (
    <>
      <div className="flex justify-between items-center p-6 gap-1">
        <figure className="flex justify-around items-center gap-2">
          <img
            className="w-10 h-10 overflow-auto rounded-lg object-cover"
            src={image}
            alt={title}
          />
          <figcaption className="text-xs w-40">{title}</figcaption>
          <h5 className="text-sm font-bold">{price}</h5>
        </figure>
        <DeleteProduct fillColor="white" />
      </div>
    </>
  );
};
