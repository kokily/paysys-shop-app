import client from './client';

export async function changePasswordAPI(password: string) {
  const response = await client.patch('/users/password', { password });
  return response.data;
}
