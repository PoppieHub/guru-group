import React from 'react';
import styled from 'styled-components';
import { getProducts } from './api/products';
import {Product} from "./interfaces/Product";

const App: React.FC = () => {
  const [products, setProducts] = React.useState<Product[]>();

  React.useEffect(() => {
    getProducts().then((res) => {
      setProducts({
        ...products,
        ...res
      });
    })
  }, []);

  return (
    <div className="App">

    </div>
  );
}

export default App;
