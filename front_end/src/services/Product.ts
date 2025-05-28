import axios from "axios";


export const fetchAllProducts = async () => {
  const response = await axios.get('/products');
  return response.data;
};

export const deleteProduct = async (id: string) => {
  const response = await axios.delete(`/products/${id}`);
  return response.data;
};
