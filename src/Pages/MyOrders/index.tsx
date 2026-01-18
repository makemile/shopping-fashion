import { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { ShoppingCartContext } from "../../context";
import { OrdersCard } from "../../components/OrdersCard";
import React from "react";


export const MyOrders = () => {
  const context = useContext(ShoppingCartContext);
    if (!context) return null;
 
  return (
    <Layout>
      {context.order?.map((order,index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard count={order.count} price={order.price} />
        </Link>
      ))}
    </Layout>
  );
};
