import React, { useState } from 'react';
import { Col, Row } from 'rsuite';
import givenProducts from '../db/products.json';

const Category = ({ category }) => {
  const [products] = useState(
    givenProducts.filter(p => p.categoryId === category.id)
  );
  return (
    <Row>
      <Col>
        <h2>{category.name}</h2>
        <div>
          <Products products={givenProducts} />
        </div>
      </Col>
    </Row>
  );
};

export default Category;
