import { useState } from "react";

const EditForm = ({
  id,
  title,
  price,
  quantity,
  handleClick,
  onEditFormSubmit,
}) => {
  const [tempTitle, setTitle] = useState(title);
  const [tempPrice, setPrice] = useState(price);
  const [tempQuantity, setQuantity] = useState(quantity);

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      title: tempTitle,
      price: tempPrice,
      quantity: tempQuantity,
    };
    onEditFormSubmit(updatedProduct, id, reset);
  };

  const reset = () => {
    setTitle("");
    setPrice("");
    setQuantity("");
    handleClick();
  };

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form onSubmit={handleEditFormSubmit}>
        <div className="input-group">
          <label htmlFor="product-name">{title}</label>
          <input
            type="text"
            id="product-name"
            value={tempTitle}
            onChange={(e) => setTitle(e.target.value)}
            aria-label="Product Name"
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">{price}</label>
          <input
            type="number"
            id="product-price"
            onChange={(e) => setPrice(e.target.value)}
            value={tempPrice}
            aria-label="Product Price"
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">{quantity}</label>
          <input
            type="number"
            id="product-quantity"
            onChange={(e) => setQuantity(e.target.value)}
            value={tempQuantity}
            aria-label="Product Quantity"
          />
        </div>

        <div className="actions form-actions">
          <button type="submit">Update</button>
          <button type="button" onClick={handleClick}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
