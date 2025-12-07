import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchProductById } from '../utils/api';
import { useAuth } from '../context/AuthContext';
import Loading from '../components/Loading';
import Error from '../components/Error';
import './Order.css';

const Order = () => {
  const { id } = useParams();
  const { currentUser } = useAuth();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false);

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

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  if (!product) {
    return <Error message="Product not found" />;
  }

  if (orderPlaced) {
    return (
      <div className="order-success">
        <div className="success-card">
          <h1>✅ Order Placed Successfully!</h1>
          <p>Your order for <strong>{product.title}</strong> has been placed.</p>
          <p>Order ID: <strong>ORD-{id}-{Date.now()}</strong></p>
          <p>Total Amount: <strong>${product.price}</strong></p>
          <div className="success-actions">
            <Link to="/dashboard" className="success-btn">View Dashboard</Link>
            <Link to="/" className="success-btn secondary">Continue Shopping</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="order-page">
      <Link to={`/products/${id}`} className="back-link">← Back to Product</Link>
      
      <div className="order-container">
        <h1>Place Your Order</h1>
        
        <div className="order-summary">
          <div className="order-product">
            <img src={product.image || 'https://via.placeholder.com/150'} alt={product.title} />
            <div className="order-product-info">
              <h3>{product.title}</h3>
              <p className="order-category">{product.category}</p>
              <p className="order-price">${product.price}</p>
            </div>
          </div>
        </div>

        <div className="order-details">
          <h2>Order Details</h2>
          <div className="detail-row">
            <span>Customer:</span>
            <span>{currentUser?.displayName || currentUser?.email}</span>
          </div>
          <div className="detail-row">
            <span>Email:</span>
            <span>{currentUser?.email}</span>
          </div>
          <div className="detail-row">
            <span>Product:</span>
            <span>{product.title}</span>
          </div>
          <div className="detail-row">
            <span>Quantity:</span>
            <span>1</span>
          </div>
          <div className="detail-row total">
            <span>Total Amount:</span>
            <span>${product.price}</span>
          </div>
        </div>

        <button onClick={handlePlaceOrder} className="place-order-btn">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Order;

