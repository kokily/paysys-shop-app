import qs from 'qs';
import client from './client';

export type AddBillPayload = {
  title: string;
  hall: string;
  etc: string;
};

// Add Bill API
export async function addBillAPI(payload: AddBillPayload) {
  const response = await client.post<BillType>('/bills', payload);
  return response.data;
}

export type ListBillsQuery = {
  user_id?: string;
  title?: string;
  hall?: string;
  cursor?: string;
};

// List Bills API
export async function listBillsAPI(query: ListBillsQuery) {
  const queryString = qs.stringify(query);
  const response = await client.get<BillType[]>(`/bills?${queryString}`);
  return response.data;
}

// Read Bill API
export async function readBillAPI(id: string) {
  const response = await client.get<BillType>(`/bills/${id}`);
  return response.data;
}

// Remove Bill API
export async function removeBillAPI(id: string) {
  const response = await client.delete(`/bills/${id}`);
  return response.data;
}

// Restore Bill API
export async function restoreBillAPI(id: string) {
  const response = await client.patch(`/bills/${id}`);
  return response.data;
}
