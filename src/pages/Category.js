import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import categories from '../db/categories.json';
import givenProducts from '../db/products.json';
import Products from '../components/Products';
import FilterCheckBox from '../components/FilterCheckBox';
import { useFilters } from '../libs/useFilter';

function getComputedProducts(products, filters) {
  let result = [...products];

  if (filters.delivery) {
    result = result.filter(p => p.delivery === true);
  }
  if (filters.inStock) {
    result = result.filter(p => p.inStock === true);
  }
  if (filters.expensive) {
    result = result.filter(p => p.price > 100);
  }

  return result;
}

const Category = ({ category }) => {
  const [products] = useState(
    givenProducts.filter(p => p.categoryId === category.id)
  );

  const [filter, disptachFilter] = useFilters({
    delivery: false,
    inStock: false,
    expensive: false,
  });

  const filteredProducts = getComputedProducts(products, filter);

  const onCheckboxChange = useCallback(
    ev => {
      const checkbox = ev.target;
      disptachFilter({
        type: 'SET',
        filterName: checkbox.name,
        value: checkbox.checked,
      });
    },
    [disptachFilter]
  );

  return (
    <div>
      <div>
        <h3>Filters</h3>
        <FilterCheckBox
          id="delivery"
          name="delivery"
          checked={filter.delivery}
          onChange={onCheckboxChange}
          label="Delivery"
        />
        <FilterCheckBox
          id="inStock"
          name="inStock"
          checked={filter.inStock}
          onChange={onCheckboxChange}
          label="inStock"
        />
        <FilterCheckBox
          id="expensive"
          name="expensive"
          checked={filter.expensive}
          onChange={onCheckboxChange}
          label="Expensive (over 100$)"
        />
      </div>
      <h3>{category.name}</h3>
      <div>
        <Products products={filteredProducts} />
      </div>
    </div>
  );
};

const CategoryContainer = () => {
  const { id } = useParams();

  const category = categories.find(c => c.id === id);

  if (!category) {
    return <div>Categry with id {id} does not exist</div>;
  }

  return <Category category={category} />;
};

export default CategoryContainer;
