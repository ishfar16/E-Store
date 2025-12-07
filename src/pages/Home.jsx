import { useState, useEffect } from 'react';
import { fetchProducts } from '../utils/api';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';
import Error from '../components/Error';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setError(null);
      const result = await fetchProducts();
      
      if (result.success) {
        setProducts(result.data);
      } else {
        setError(result.error);
      }
      setLoading(false);
    };

    loadProducts();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to E-Store</h1>
        <p>Discover amazing products at great prices</p>
      </div>
      <div className="products-section">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

