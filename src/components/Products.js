import React from 'react';
import { Button } from 'rsuite';

const Products = ({ products }) => {
  if (products.length === 0) {
    return <div>No Products Found</div>;
  }
  return products.map(
    ({
      currency,
      delivery,
      inStock,
      name,
      price,
      thumbnail,
      ...restOfProduct
    }) => (
      <div key={restOfProduct.id}>
        <img src={thumbnail} alt={name} width={50} />
        <div>{name}</div>
        <div>
          {currency} {price}
        </div>
        <div>{inStock ? 'In Stock' : 'Out of Stock'}</div>
        {delivery && <div>Delivery Avaliable</div>}
        <Button appearance="ghost" disabled={!inStock}>
          Add to Cart
        </Button>
      </div>
    )
  );
};

export default Products;
