import "../../../src/App.css";
import { CardUI } from "../../components/CardProduct/CardUI";
import { Layout } from "../../components/Layout";
import { ProductDetail } from "../../components/ProductDetail";
import { ShoppingCartContext } from "../../context";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { InputForm } from "../../components/ui/InputForm.jsx";
import React from "react";
import { CardSkeleton } from "../../helper/Skeleton";

export const Home = () => {
  const context = useContext(ShoppingCartContext);
  const ITEMS_PER_PAGE = 9;
  if (!context) return null;
  const { category } = useParams();

  const showProduct = (productDetail: any) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
  };

  const renderView = () => {
    if (context.loading) {
      return [...Array(ITEMS_PER_PAGE)].map((_, index) => (
        <CardSkeleton key={`skeleton-${index}`} />
      ));
    }

    const itemsToRender = category
      ? context.filterItem?.filter((item) =>
          item.category.name.toLowerCase().includes(category.toLowerCase()),
        )
      : context.filterItem;

    if (itemsToRender?.length > 0) {
      return itemsToRender.map((item) => (
        <CardUI
          key={item.id}
          id={item.id}
          title={item.title}
          images={item.images[0]}
          category={item.category.name}
          price={item.price}
          showProduct={() => showProduct(item)}
          item={item}
          context={context}
        />
      ));
    }
    return (
      <div className="col-span-full text-center py-20">
        <p className="text-gray-500 font-medium">
          No se encontraron resultados...
        </p>
      </div>
    );
  };

  return (
    <>
      <Layout>
        <div className=" gap-4">
          <InputForm
            type="search"
            placeholder="Search product Favorite"
            className="rounded-3xl w-72 md:w-96 h-10 text-center border border-slate-600 focus:outline-none"
            onChange={(e) => context.setSearch(e.target.value)}
            value={context.debouncedSearch}
          />
        </div>
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-auto max-w-screen-lg lg:grid-cols-3 items-center">
            {renderView()}
          </div>
          <ProductDetail />
        </>
      </Layout>
    </>
  );
};
