import axios from "axios";

export const getProducts = async () => {
  const { data } = await axios.get("/api/products");
  return data;
};

export const createProduct = async (product) => {
  const { data } = await axios.post("/api/products", { ...product });
  return data;
};

export const updateProduct = async (product, id) => {
  const { data } = await axios.put(`/api/products/${id}`, { ...product });
  return data;
};

export const deleteProduct = async (id) => {
  await axios.delete(`/api/products/${id}`);
};
