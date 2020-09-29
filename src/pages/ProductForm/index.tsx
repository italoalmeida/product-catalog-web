import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, TextArea, Header, Button } from './style';

const ProductForm = () => {
  return (
    <>
      <Header>
        <h2>Novo Produto</h2>
      </Header>
      <Form>
        <Input type="text" placeholder="Nome" />
        <Input type="number" placeholder="Preço" />
        <TextArea placeholder="Descrição" />
        <div id="action-buttons">
          <Link to="/catalog">
            <Button className="cancel">Cancelar</Button>
          </Link>
          <Button className="save">Salvar</Button>
        </div>
      </Form>
    </>
  );
};

export default ProductForm;
