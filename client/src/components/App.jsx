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

  const handleAddProductToCart = async (id) => {
    try {
      const { product, item } = await addProductToCart(id);
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
      />
    </div>
  );
};

export default App;
