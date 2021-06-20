import React, { useState } from 'react';
import givenProducts from '../db/products.json';
import { Col } from 'rsuite';

const Category = ({ category }) => {
  const [products] = useState(
    givenProducts.filter(p => p.categoryId === category.id)
  );

  return (
    <Col>
      <div>
        <h2>TODO</h2>
      </div>
    </Col>
  );
};

export default Category;
