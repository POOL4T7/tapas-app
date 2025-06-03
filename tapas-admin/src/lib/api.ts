import axios from 'axios';

// Axios instance with base URL
export const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_SERVER_URL
      : '/altmariendorf',
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    // Try to get user details from localStorage
    const userDetailsString = localStorage.getItem('userDetails');

    if (userDetailsString) {
      try {
        const userDetails = JSON.parse(userDetailsString);

        // Add authorization header if token exists
        if (userDetails.token) {
          config.headers['Authorization'] = `Bearer ${userDetails.token}`;
        }
      } catch (error) {
        console.error('Error parsing user details:', error);
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 403) {
      // Logout the user if the response returns with 403
      axios.post('/api/auth/logout').then(() => {
        localStorage.removeItem('userDetails');
        window.location.href = '/login';
      });
    }

    return Promise.reject(error);
  }
);
