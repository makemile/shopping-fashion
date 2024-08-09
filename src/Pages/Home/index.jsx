import "../../App.css";
import { CardUI } from "../../components/ui/CardUI";
import { Layout } from "../../components/Layout";
import { ProductDetail } from "../../components/ProductDetail";
import { ShoppingCartContext } from "../../context";
import { useContext } from "react";
import { CustomInput } from "../../components/ui/Input";

export const Home = () => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
  };

  const renderView = () => {
    const itemsToRender =
      context.debouncedSearch?.length > 0 ? context.filterItem : context.data;

    return itemsToRender?.length > 0 ? (
      itemsToRender.map((item) => (
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
      ))
    ) : (
      <p>No Results Found</p>
    );
  };

  return (
    <>
      <Layout>
        <CustomInput
          type="search"
          onChange={(e) => context.setSearch(e.target.value)}
          value={context.debouncedSearch}
        />
        <div className="grid grid-cols-4 gap-3 w-full max-w-screen-lg">
          {renderView()}
        </div>
        <ProductDetail />
      </Layout>
    </>
  );
};
