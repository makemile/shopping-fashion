import { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { ShoppingCartContext } from "../../context";
import { OrdersCard } from "../../components/OrdersCard";
import React from "react";

export const MyOrders = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) return null;
  console.log(context, "context");
  return (
    <>
      <Layout>
        <h6>Consulta tus pedidos recientes y su estado.</h6>
        {context.cartProducts?.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              count={order.count}
              price={order.price}
              title={order.title}
            />
          </Link>
        ))}
      </Layout>
    </>
  );
};
