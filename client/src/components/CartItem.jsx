const CartItem = ({ title, quantity, price }) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{quantity}</td>
      <td>${price * quantity}</td>
    </tr>
  );
};

export default CartItem;
