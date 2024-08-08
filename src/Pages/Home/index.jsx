import "../../App.css";
import { CardUI } from "../../components/ui/CardUI";
import { Layout } from "../../components/Layout";
import { ProductDetail } from "../../components/ProductDetail";
import { ShoppingCartContext } from "../../context";
import { useContext } from "react";


export const Home = () => {
 
  const context = useContext(ShoppingCartContext);
 

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
  }

  return (
    <>
      <Layout>
        <div className="grid grid-cols-4 gap-3 w-full max-w-screen-lg">
          {context.data?.map((item) => (
            <CardUI
              key={item.id}
              id={item.id}
              title={item.title}
              images={item.images[0]}
              category={item.category.name}
              price={item.price}
              showProduct={showProduct}
              item = {item}
              context = {context}
            />
          ))}
        </div>
        <ProductDetail/>
      </Layout>
    </>
  );
};
