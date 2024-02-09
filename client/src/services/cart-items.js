import axios from "axios";

export const getCartItems = async () => {
  const { data } = await axios.get("/api/cart");
  return data;
};

export const addProductToCart = async (id) => {
  const { data } = await axios.post("/api/add-to-cart", { productId: id });
  // returns an object with two fields for product and item
  console.log(data.item, data.product);
  return data;
};
