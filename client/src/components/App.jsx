import { useState, useEffect } from "react";

import Header from "./Header";
import Main from "./Main";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/products";
import { getCartItems, addProductToCart } from "../services/cart-items";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (e) {
        console.error(e);
      }
    };

    const fetchCartItems = async () => {
      try {
        const data = await getCartItems();
        setCartItems(data);
        console.log(cartItems);
      } catch (e) {
        console.error(e);
      }
    };

    fetchProducts();
    fetchCartItems();
  }, []);

  const handleAddFormSubmit = async (product, callback) => {
    try {
      const data = await createProduct(product);
      setProducts(products.concat(data));
      if (callback) {
        callback();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleEditFormSubmit = async (product, id, callback) => {
    try {
      const data = await updateProduct(product, id);
      setProducts(
        products.map((product) => {
          if (product._id === id) {
            return data;
          } else {
            return product;
          }
        }),
      );
      if (callback) {
        callback();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter((product) => product._id !== id));
    } catch (e) {
      console.error(e);
    }
  };

  // TODO
  const handleAddProductToCart = async (productId) => {
    try {
      const { product: updatedProduct, item: updatedItem } =
        await addProductToCart(productId);
      setCartItems(
        cartItems.find((item) => item._id === updatedItem._id)
          ? cartItems.map((item) =>
              item._id === updatedItem._id ? updatedItem : item,
            )
          : cartItems.concat(updatedItem),
      );
      setProducts(
        products.map((product) => {
          if (product._id === productId) {
            return updatedProduct;
          } else {
            return product;
          }
        }),
      );
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div id="root">
      <Header cartItems={cartItems} />
      <Main
        products={products}
        onAddFormSubmit={handleAddFormSubmit}
        onEditFormSubmit={handleEditFormSubmit}
        onDelete={handleDeleteProduct}
        onAddProductToCart={handleAddProductToCart}
      />
    </div>
  );
};

export default App;
