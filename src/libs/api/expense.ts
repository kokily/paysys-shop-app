import client from './client';

// Add Expense API
export async function addExpenseAPI(payload: ExpenseType) {
  const response = await client.post<WeddingType>('/weddings', payload);
  return response.data;
}

// Update Expense API
export async function updateExpenseAPI(payload: UpdateExpenseType) {
  const response = await client.put('/weddings', payload);
  return response.data;
}

// Remove Expense API
export async function removeExpenseAPI(id: string) {
  const response = await client.delete(`/weddings/${id}`);
  return response.data;
}
