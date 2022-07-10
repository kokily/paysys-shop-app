import client from './client';

export type AddCartPayload = {
  item_id: string;
  price: number;
  count: number;
};

// Add Cart API
export async function addCartAPI(payload: AddCartPayload) {
  const response = await client.post('/cart', payload);
  return response.data;
}

// View Cart API
export async function viewCartAPI() {
  const response = await client.get('/cart');
  return response.data;
}

// Remove Cart API
export async function removeCartAPI() {
  const response = await client.delete('/cart');
  return response.data;
}

// Remove One Cart API
export async function removeOneCartAPI(id: string) {
  const response = await client.patch(`/cart/${id}`);
  return response.data;
}
