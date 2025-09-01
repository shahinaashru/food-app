import React, { useState, useEffect } from 'react';

// Sample JSON array (replace with your real data or fetch from API)
const productsFromJson = [
  { id: 101, name: "Nike Air Max 270", price: 150, category: "Shoes" },
  { id: 102, name: "Adidas Ultraboost", price: 180, category: "Shoes" },
  { id: 103, name: "Puma Running Shoes", price: 120, category: "Shoes" },
  { id: 104, name: "New Balance 1080", price: 170, category: "Shoes" }
];

const ProductPage = () => {
  const [products] = useState(productsFromJson);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortOrder === 'lowToHigh') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'highToLow') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [searchTerm, sortOrder, products]);

  return (
    <div style={{ padding: '20px' }}>
      <div style={styles.topBar}>
        <h2 style={styles.title}>Products</h2>
        <div style={styles.searchSortContainer}>
          <input
            type="text"
            placeholder="Search product..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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

      <div style={styles.grid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} style={styles.card}>
              <h3 style={{ margin: '10px 0' }}>{product.name}</h3>
              <p><strong>${product.price}</strong></p>
              <p style={{ color: '#777' }}>Category: {product.category}</p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    flexWrap: 'wrap'
  },
  title: {
    margin: '0 0 10px 0'
  },
  searchSortContainer: {
    display: 'flex',
    gap: '10px'
  },
  input: {
    padding: '8px',
    width: '200px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  },
  select: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '20px'
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
    transition: '0.3s',
    backgroundColor: '#fff'
  }
};

export default ProductPage;
