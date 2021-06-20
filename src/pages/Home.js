import React from 'react';
import { Row } from 'rsuite';
import { Link } from 'react-router-dom';
import categories from '../db/categories.json';
import '../styles/index.css';

const Home = () => (
  <Row>
    {categories.map(c => (
      <div key={c.id}>
        <Link to={`/category/${c.id}`}>{c.name}</Link>
      </div>
    ))}
  </Row>
);

export default Home;
