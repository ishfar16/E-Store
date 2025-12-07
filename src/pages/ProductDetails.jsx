import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductById } from '../utils/api';
import { useCart } from '../context/CartContext';
import Loading from '../components/Loading';
import Error from '../components/Error';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      setError(null);
      const result = await fetchProductById(id);
      
      if (result.success) {
        setProduct(result.data);
      } else {
        setError(result.error);
      }
      setLoading(false);
    };

    loadProduct();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  if (!product) {
    return <Error message="Product not found" />;
  }

  return (
    <div className="product-details">
      <Link to="/" className="back-link">← Back to Home</Link>
      
      <div className="product-details-container">
        <div className="product-image-section">
          <img src={product.image || 'https://via.placeholder.com/500'} alt={product.title} />
        </div>
        
        <div className="product-info-section">
          <h1>{product.title}</h1>
          <div className="product-meta">
            <span className="product-category">{product.category}</span>
            <span className="product-rating">⭐ {product.rating?.rate || 'N/A'} ({product.rating?.count || 0} reviews)</span>
          </div>
          <p className="product-price">${product.price}</p>
          <p className="product-description">{product.description}</p>
          
          <div className="product-actions">
            <button 
              className="add-to-cart-btn"
              onClick={() => {
                addToCart(product);
                setAddedToCart(true);
                setTimeout(() => setAddedToCart(false), 3000);
              }}
            >
              {addedToCart ? '✓ Added to Cart!' : 'Add to Cart'}
            </button>
            <Link to={`/order/${id}`} className="buy-now-btn">Buy Now</Link>
          </div>
          {addedToCart && (
            <div className="cart-notification">
              Product added to cart! <Link to="/cart">View Cart</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

