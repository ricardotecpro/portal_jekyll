import axios from 'axios';

// 🚨 MUDE ESTE IP para o IP local da sua máquina!
const API_URL = 'http://192.168.0.55:8080/api';

const api = axios.create({
    baseURL: API_URL,
});

export const getTasks = () => api.get('/tasks');
export const createTask = (task) => api.post('/tasks', task);
export const updateTask = (id, task) => api.put(`/tasks/${id}`, task);
export const deleteTask = (id) => api.delete(`/tasks/${id}`);