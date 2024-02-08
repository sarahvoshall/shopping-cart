import CartItem from "./CartItem";

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 && <p>Your cart is empty</p>}
      {cartItems.length !== 0 && (
        <table className="cart-items">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <CartItem {...item} />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" className="total">
                Total: $
                {cartItems.reduce((total, { price }) => (total += price), 0)}
              </td>
            </tr>
          </tfoot>
        </table>
      )}
      <button className="checkout" disabled>
        Checkout
      </button>
    </div>
  );
};

export default Cart;
