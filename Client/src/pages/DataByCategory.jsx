import React, { useState, useEffect } from "react";

const DataByCategory = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `http://127.0.0.1:8000/api/products-all?categories-all=${category}`
      );
      const products = await response.json();
      setProducts(products);
    };
    fetchProducts();
  }, [category]);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h3>{product.title}</h3>
          <h3>{product.book_info}</h3>
          <h3>{product.image_link}</h3>
          <p>{product.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default DataByCategory;