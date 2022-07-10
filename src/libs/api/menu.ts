import qs from 'qs';
import client from './client';

export type MenuQuery = {
  native: string;
  divide: string;
};

// List Menu API
export async function listMenuAPI(query: MenuQuery) {
  const queryString = qs.stringify(query);
  const response = await client.get<ItemType[]>(`/items?${queryString}`);
  return response.data;
}

// Read Menu API
export async function readMenuAPI(id: string) {
  const response = await client.get<ItemType>(`/items/${id}`);
  return response.data;
}
