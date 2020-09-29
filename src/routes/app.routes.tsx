import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Catalog from '../pages/Catalog';
import ProductForm from '../pages/ProductForm';

export default () => {
  return (
    <Switch>
      <Route path="/" exact component={Catalog} />
      <Route path="/catalog" exact component={Catalog} />

      <Route path="/product/new" exact component={ProductForm} />
      <Route path="/product/:id/edit" exact component={ProductForm} />

      <Route path="*" exact component={() => <h1>404 - Page not found</h1>} />
    </Switch>
  );
};
