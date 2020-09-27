import React from "react";
import { Card, Description, Title, Price, Header, Body, Footer } from "./style";

const ProductCard = () => {
  return (
    <Card>
      <Header>
        <Title>Caderno Mandacaru</Title>
        <Price>R$ 32,00</Price>
      </Header>
      <Body>
        <Description>
          Caderno Mandacaru, para você escrever e/ou desenhar seus planos pra
          dominar o mundo! Tamanho 15 cm x 21,5 cm; Capa dura em algodão natural
          pintado manualmente (é por isso isso que nossas capas são
          exclusivíssimas!) Capa dua com 96 folhas de papel polen bold 90g,
          FOLHA LISA, costurado manualmente. Possui elástico preto preso a capa
          para fechamento do caderno. Ainda acompanha um lindo marcador de
          página com a estampa da capa.
        </Description>
      </Body>
      <Footer>
        <button>Editar</button>
        <button>Excluir</button>
      </Footer>
    </Card>
  );
};

export default ProductCard;
