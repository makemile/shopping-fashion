import "../../App.css";
import { URLAPI } from "../../services/Api";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { CardUI } from "../../components/ui/CardUI";
import { Layout } from "../../components/Layout";
import { ProductDetail } from "../../components/ProductDetail";
import { ShoppingCartContext } from "../../context";


export const Home = () => {
  const [data, setData] = useState([]);
  const context = useContext(ShoppingCartContext);
 

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
  }

  useEffect(() => {
    async function fetchAPI() {
      try {
        const response = await axios.get(URLAPI, {
          mode: 'no-cors'
        });
        setData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error(error);
      } finally {
        console.info("finalizado");
      }
    }
    fetchAPI();
  }, []);
  return (
    <>
      <Layout>
        <div className="grid grid-cols-4 gap-3 w-full max-w-screen-lg">
          {data?.map((item) => (
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
