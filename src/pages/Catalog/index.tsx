import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { LIST_PRODUCT } from "../../graphql/list-product";
import { Product } from "../../graphql/types/product";
import { Board, Header } from "./style";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { data } = useQuery(LIST_PRODUCT);

  useEffect(() => {
    if (data) {
      setProducts(data.listProduct);
    }
  }, [data]);

  return (
    <>
      <Header>
        <h2>Catálogo de Produtos</h2>
        <button>
          <AiOutlinePlusCircle size="28" fill="rgba(10, 142, 126, 0.8)" />
        </button>
      </Header>

      <Board>
        {products &&
          products.map((product: Product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          ))}
      </Board>
    </>
  );
};

export default Catalog;
