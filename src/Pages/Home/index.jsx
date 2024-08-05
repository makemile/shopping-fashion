import "../../App.css";
import { CardUI } from "../../components/ui/CardUI";
import { URLAPI } from "../../services/Api";
import { useEffect, useState } from "react";
import axios from "axios";
import { Layout } from "../../components/Layout";

export const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchAPI() {
      try {
        const response = await axios.get(URLAPI);
        setData(response.data);
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
              title={item.title}
              image={item.image}
              category={item.category}
              price={item.price}
            />
          ))}
        </div>
      </Layout>
    </>
  );
};
