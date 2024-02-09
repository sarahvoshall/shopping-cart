import { useState } from "react";

const AddForm = ({ onAddFormSubmit }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    const newProduct = { title, price, quantity };
    onAddFormSubmit(newProduct, reset);
  };

  const reset = () => {
    setTitle("");
    setPrice("");
    setQuantity("");
    setIsClicked(false);
  };

  return (
    <>
      {!isClicked && (
        <button onClick={() => setIsClicked(true)}>Add A Product</button>
      )}

      {isClicked && (
        <>
          <div className="add-form visible">
            <h3>Add Product</h3>
            <form onSubmit={handleAddFormSubmit}>
              <div className="input-group">
                <label htmlFor="product-name">Product Name:</label>
                <input
                  type="text"
                  id="product-name"
                  name="product-name"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="product-price">Price:</label>
                <input
                  type="number"
                  id="product-price"
                  name="product-price"
                  min="0"
                  step="0.01"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="product-quantity">Quantity:</label>
                <input
                  type="number"
                  id="product-quantity"
                  name="product-quantity"
                  onChange={(e) => setQuantity(e.target.value)}
                  value={quantity}
                  min="0"
                  required
                />
              </div>
              <div className="actions form-actions">
                <button type="submit">Add</button>
                <button type="button" onClick={() => setIsClicked(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default AddForm;
