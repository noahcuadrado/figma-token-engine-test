import "./ExampleComponent.css";

export const ExampleComponent = () => {
  return (
    <div className="ecommerce-component">
      <img
        src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Product"
        className="ecommerce-image"
        width="400"
        height="250"
      />
      <div className="ecommerce-details">
        <h2 className="ecommerce-title">Product Title</h2>
        <p className="ecommerce-description">
          This is a brief description of the product. It highlights key features
          and benefits to entice potential buyers.
        </p>
        <div className="ecommerce-info">
          <div className="ecommerce-price">
            <span className="ecommerce-price-label">Price:</span>
            <span className="ecommerce-price-value">$25.99</span>
          </div>
          <button className="ecommerce-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
