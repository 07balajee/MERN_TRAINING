const API_URL = 'http://localhost:3000';

export const apiCall = async (endpoint, method = 'GET', body = null) => {
    const token = sessionStorage.getItem('token');
    
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (token) {
        options.headers['Authorization'] = `Bearer ${token}`;
    }

    if (body) {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(`${API_URL}${endpoint}`, options);
    const data = await response.json();

    return { response, data };
};

// Auth APIs
export const loginUser = (email, password) => 
    apiCall('/auth/login', 'POST', { email, password });

export const registerUser = (username, email, password) =>
    apiCall('/auth/register', 'POST', { username, email, password });

// Product APIs
export const getAllProducts = () => apiCall('/products');

export const getProductById = (id) => apiCall(`/products/${id}`);

export const addProduct = (product) =>
    apiCall('/products', 'POST', product);

export const updateProduct = (id, product) =>
    apiCall(`/products/${id}`, 'PUT', product);

export const deleteProduct = (id) =>
    apiCall(`/products/${id}`, 'DELETE');

// Cart APIs
export const getCart = () => apiCall('/cart');

export const addToCart = (item) =>
    apiCall('/cart', 'POST', item);

export const updateCartItem = (id, quantity) =>
    apiCall(`/cart/${id}`, 'PUT', { quantity });

export const removeFromCart = (id) =>
    apiCall(`/cart/${id}`, 'DELETE');

export const clearCart = () =>
    apiCall('/cart', 'DELETE');
