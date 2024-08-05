import { ShoppingCartProvider } from "../../context";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "../../routes";
import "../../App.css";
import { Navbar } from "../../components/Navbar";

export const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};
