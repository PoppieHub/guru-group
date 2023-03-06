import React from 'react';
import { getProducts } from './api/products';
import {Cards} from "./interfaces/Cards";
import {CardsWrapper} from "./containers";

const App: React.FC = () => {
  const [products, setProducts] = React.useState<Cards>({cards: []});

  React.useEffect(() => {
    getProducts().then((res) => {
      setProducts({
        ...products,
        cards: [...res]
      });
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      {products?.cards && <CardsWrapper cards={products.cards} />}
    </div>
  );
}

export default App;
