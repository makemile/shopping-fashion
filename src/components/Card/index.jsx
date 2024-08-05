import { CardUI } from "../ui/CardUI";
import { URLAPI } from "../../services/Api";
import { useEffect, useState } from "react";
import axios from "axios";

export const Card = () => {
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
   <div className="grid grid-cols-4 gap-3 w-full max-w-screen-lg">
   {
     data?.map(item => (
        <CardUI key={item.id} item={item} />
     ))
    }
   </div>
      
    </>
  );
};
