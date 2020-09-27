import React from "react";
import { Card, Description, Title, Price, Header, Body, Footer } from "./style";
import { FaRegTrashAlt } from "react-icons/fa";

type ProductCardProps = {
  name: string;
  price: number;
  description: string;
};

const ProductCard = (props: ProductCardProps) => {
  const { name, price, description } = props;

  return (
    <Card>
      <Header>
        <Title>{name}</Title>
        <Price>R$ {price.toFixed(2).replace(".", ",")}</Price>
      </Header>
      <Body>
        <Description>{description}</Description>
      </Body>
      <Footer>
        <button>
          <FaRegTrashAlt size="18" fill="rgba(255, 0, 0, 0.6)" />
        </button>
      </Footer>
    </Card>
  );
};

export default ProductCard;
