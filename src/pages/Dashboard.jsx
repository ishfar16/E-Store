import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const { currentUser } = useAuth();

  // Mock orders for demonstration
  const orders = [
    { id: 1, productName: 'Product 1', date: '2024-01-15', status: 'Delivered', total: 29.99 },
    { id: 2, productName: 'Product 2', date: '2024-01-20', status: 'Processing', total: 49.99 },
    { id: 3, productName: 'Product 3', date: '2024-01-25', status: 'Shipped', total: 19.99 },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome back, {currentUser?.displayName || currentUser?.email}!</p>
      </div>

      <div className="dashboard-content">
        <div className="profile-section">
          <h2>Profile Information</h2>
          <div className="profile-card">
            <div className="profile-item">
              <strong>Name:</strong> {currentUser?.displayName || 'Not set'}
            </div>
            <div className="profile-item">
              <strong>Email:</strong> {currentUser?.email}
            </div>
            <div className="profile-item">
              <strong>User ID:</strong> {currentUser?.uid}
            </div>
            <div className="profile-item">
              <strong>Email Verified:</strong> {currentUser?.emailVerified ? 'Yes' : 'No'}
            </div>
          </div>
        </div>

        <div className="orders-section">
          <h2>Recent Orders</h2>
          <div className="orders-list">
            {orders.map((order) => (
              <Link key={order.id} to={`/order/${order.id}`} className="order-card">
                <div className="order-info">
                  <h3>{order.productName}</h3>
                  <p>Date: {order.date}</p>
                  <p>Total: ${order.total}</p>
                </div>
                <div className={`order-status ${order.status.toLowerCase()}`}>
                  {order.status}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="quick-actions">
          <Link to="/" className="action-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

