import React from "react";
import ProductCard from "../../components/ProductCard";
import { Board, Header } from "./style";

const Catalog = () => {
  return (
    <>
      <Header>
        <h2>Catálogo de Produtos</h2>
        <button>Adicionar Novo</button>
      </Header>

      <Board>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Board>
    </>
  );
};

export default Catalog;
