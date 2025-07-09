const API_BASE_URL = 'http://localhost:9090/api';

const username = 'admin';
const password = 'adminpass';

export async function getCars() {
  const response = await fetch('https://myfakeapi.com/api/cars/');
  if (!response.ok) {
    throw new Error('Failed to fetch cars');
  }
  const data = await response.json();
  console.log(data)
  return data.cars;
}


export async function postBooking(bookingData) {
  const response = await fetch(`${API_BASE_URL}/bookings`, {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + btoa(`${username}:${password}`),
       'Content-Type': 'application/json'
     },
    body: JSON.stringify(bookingData),
  });
  if (!response.ok) {
    console.log(response)
    throw new Error('Failed to post booking');
  }
  return response.json();
}
   