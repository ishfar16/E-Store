import './Error.css';

const Error = ({ message }) => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h2>⚠️ Error</h2>
        <p>{message || 'Something went wrong. Please try again.'}</p>
      </div>
    </div>
  );
};

export default Error;

