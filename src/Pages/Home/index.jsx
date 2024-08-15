import "../../App.css";
import { CardUI } from "../../components/ui/CardUI";
import { Layout } from "../../components/Layout";
import { ProductDetail } from "../../components/ProductDetail";
import { ShoppingCartContext } from "../../context";
import { useContext } from "react";
import { CustomInput } from "../../components/ui/Input";
import { useParams } from "react-router-dom";

export const Home = () => {
  const context = useContext(ShoppingCartContext);
  const { category } = useParams();

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
    console.log(productDetail)
  };

  const renderView = () => {
    if (category !== undefined) {
      const filtered = context.filterItem?.filter((item) =>
        item.category.name.toLowerCase().includes(category.toLowerCase())
      );

      if (filtered?.length) {
        return filtered.map((item) => (
          <CardUI
            key={item.id}
            id={item.id}
            title={item.title}
            images={item.images[0]}
            category={item.category.name}
            price={item.price}
            showProduct={showProduct}
            item={item}
            context={context}
          />
        ));
      } else {
        return <div>There are nothing to see</div>;
      }
    } else {
      return context.filterItem?.map((item) => (
        <CardUI
          key={item.id}
          id={item.id}
          title={item.title}
          images={item.images[0]}
          category={item.category.name}
          price={item.price}
          showProduct={showProduct}
          item={item}
          context={context}
        />
      ));
    }
  };

  return (
    <>
      <Layout>
        <CustomInput
          type="search"
          onChange={(e) => context.setSearch(e.target.value)}
          value={context.debouncedSearch}
        />
        {context.loading ? (
          <p>mi loading</p>
        ) : (
          <>
            <div className="grid grid-cols-3 gap-7 w-auto max-w-screen-lg items-center">
              {renderView()}
            </div>
            <ProductDetail />
          </>
        )}
      </Layout>
    </>
  );
};
