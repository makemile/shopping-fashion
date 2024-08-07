import { ShoppingCartProvider } from "../../context";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "../../routes";
import "../../App.css";
import { Navbar } from "../../components/Navbar";
import { CheckoutSideMenu } from "../../components/CheckoutSideMenu";




export const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};
