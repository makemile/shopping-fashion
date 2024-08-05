import "./styles.css";
export const PorductDetail = ({ shouldShow, onRequestClose, children }) => {
  return shouldShow ? (
    <aside
      onClick={onRequestClose}
      className="product-detail flex flex-col fixed right-0 top-14 border border-black rounded-lg bg-white"
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <button className="text-xl" onClick={onRequestClose}>
          x
        </button>
      </div>
      {children}
    </aside>
  ) : null;
};
