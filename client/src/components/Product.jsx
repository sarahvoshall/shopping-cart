import { useState } from "react";

import EditForm from "./EditForm";

const Product = ({
  _id,
  title,
  price,
  quantity,
  onEditFormSubmit,
  onDelete,
  onAddProductToCart,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(false);
  };

  const handleDelete = () => {
    onDelete(_id);
  };

  const handleAddProductToCart = () => {
    onAddProductToCart(_id);
  };

  return (
    <li className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        {!isClicked && (
          <div className="actions product-actions">
            <button
              className="add-to-cart"
              onClick={handleAddProductToCart}
              disabled={quantity === 0}
            >
              Add to Cart
            </button>
            <button className="edit" onClick={() => setIsClicked(true)}>
              Edit
            </button>
          </div>
        )}
        <button className="delete-button" onClick={handleDelete}>
          <span>X</span>
        </button>
        {isClicked && (
          <EditForm
            id={_id}
            title={title}
            price={price}
            quantity={quantity}
            handleClick={handleClick}
            onEditFormSubmit={onEditFormSubmit}
          />
        )}
      </div>
    </li>
  );
};

export default Product;
