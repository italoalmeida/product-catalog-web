import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import { LIST_PRODUCT } from '../../graphql/list-product';
import { Board, Header } from './style';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Catalog = () => {
  const [products, setProducts] = useState<any[]>([]);
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
        <Link to={'/product/new'}>
          <button>
            <AiOutlinePlusCircle size="28" fill="rgba(10, 142, 126, 0.8)" />
          </button>
        </Link>
      </Header>

      <Board>
        {products &&
          products.map((product) => (
            <Link
              to={`/product/${product.id}/edit`}
              key={product.id}
              style={{ textDecoration: 'none' }}
            >
              <ProductCard
                name={product.name}
                price={product.price}
                description={product.description}
              />
            </Link>
          ))}
      </Board>
    </>
  );
};

export default Catalog;
