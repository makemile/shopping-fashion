import { useRoutes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { MyAccount } from "../Pages/MyAccount";
import { MyOrder } from "../Pages/MyOrder";
import { MyOrders } from "../Pages/MyOrders";
import { SignIn } from "../Pages/SignIn";

export const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/my-account",
      element: <MyAccount />,
    },
    {
      path: "/my-order",
      element: <MyOrder />,
    },
    {
      path: "/my-orders",
      element: <MyOrders />,
    },
    {
      path: "/electronics",
      element: <SignIn />,
    },
  ]);
  return routes;
};
