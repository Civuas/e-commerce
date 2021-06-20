import React from 'react';
import { Col, Row } from 'rsuite';
import { Link } from 'react-router-dom';
import categories from '../db/categories.json';
import '../styles/index.css';

const Home = () => (
  <Row>
    {categories.map(c => (
      <Col
        tag={Link}
        key={c.id}
        to={`/category/${c.id}`}
        className="text-center Heading"
      >
        <h2>{c.name}</h2>
        <div>{c.description}</div>
      </Col>
    ))}
  </Row>
);

export default Home;
