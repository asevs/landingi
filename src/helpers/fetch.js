export const API_URL = 'https://jsonplaceholder.typicode.com';

export async function soFetch(input, settings = {}) {
  const response = await fetch(API_URL + input, {
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    ...settings,
  });
  return response.json();
}
