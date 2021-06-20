import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'rsuite';
import categories from '../db/categories.json';
import givenProducts from '../db/products.json';

const Category = () => {
  const { id } = useParams();

  const category = categories.find(c => c.id === id);

  const categoryName = category.name;

  // eslint-disable-next-line no-unused-vars
  const [products] = useState(givenProducts.filter(p => p.categoryId === id));

  return (
    <div>
      <div>
        <h3>Filters</h3>
        <div>
          <input type="checkbox" id="delivery" name="delivery" checked />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="delivery">Delivery</label>
        </div>
      </div>
      <h3>{categoryName}</h3>
      <div>
        {products.map(
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
                Add To Cart
              </Button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Category;
