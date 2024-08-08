import "../../App.css";
import { Layout } from "../../components/Layout";
import { OrderCard } from "/src/components/OrderCard/index";
import { ShoppingCartContext } from "/src/context/index";
import { useContext } from "react";

export const MyOrder = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      <div className="flex flex-col w-80">
        {context.order?.slice(-1)[0].product.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            images={product.images[0]}
          />
        ))}
      </div>
    </Layout>
  );
};
