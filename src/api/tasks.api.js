import axios from 'axios';

// Create the axios instance with the correct base URL
const tasksApi = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/' // Keep the trailing slash here
});

// Function to get all tasks (no changes here)
export const getAllTasks = () => tasksApi.get("/");

// Function to get a specific task by id (keep the trailing slash after the id)
export const getTask = (id) => tasksApi.get(`${id}/`);

// Function to create a new task (no changes here)
export const createTask = (task) => tasksApi.post("/", task);

// Function to delete a task (keep the trailing slash after the id)
export const deleteTask = (id) => tasksApi.delete(`${id}/`);

// Function to update a task (keep the trailing slash after the id)
export const updateTask = (id, tasks) => tasksApi.put(`${id}/`, tasks);
