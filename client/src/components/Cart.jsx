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
              <CartItem key={item._id} {...item} />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3" className="total">
                Total: $
                {cartItems
                  .reduce(
                    (total, { price, quantity }) => (total += price * quantity),
                    0,
                  )
                  .toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      )}
      <button className="checkout" disabled={cartItems.length === 0}>
        Checkout
      </button>
    </div>
  );
};

export default Cart;
