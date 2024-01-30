import React, { useState } from "react";
import jsonData from "./data.json";

import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState("");

  const filterProducts = () => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar handleSearch={handleSearch} />
      <ProductTable products={filterProducts()} />
    </div>
  );
}

export default ProductsPage;
