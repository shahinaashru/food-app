import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const styles = {
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    flexWrap: 'wrap',
  },
  title: {
    margin: '0 0 10px 0',
  },
  searchSortContainer: {
    display: 'flex',
    gap: '10px',
  },
  input: {
    padding: '8px',
    width: '200px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  select: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Products() {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const query = useQuery();

  const querySearch = query.get('search') || '';
  const [searchTerm, setSearchTerm] = useState(querySearch);

  // Fetch all products on load
  useEffect(() => {
    axios
      .get('http://localhost:5000/menu')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Update filteredProducts whenever inputs change
  useEffect(() => {
    let filtered = products;

    if (searchTerm.trim()) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOrder === 'lowToHigh') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'highToLow') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [products, searchTerm, sortOrder]);

  // Sync input with URL when search is updated
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    navigate(`/products?search=${encodeURIComponent(value)}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={styles.topBar}>
        <h2 style={styles.title}>Products</h2>
        <div style={styles.searchSortContainer}>
          <input
            type="text"
            placeholder="Search product..."
            value={searchTerm}
            onChange={handleSearchChange}
            style={styles.input}
          />
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            style={styles.select}
          >
            <option value="">Sort by</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}
