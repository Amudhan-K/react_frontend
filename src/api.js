// api.js

const API_BASE_URL = "http://localhost:5000"; // Replace with your actual API base URL

export async function fetchNodesFromDB() {
  const response = await fetch(`${API_BASE_URL}/nodes`);
  if (!response.ok) {
    throw new Error("Failed to fetch nodes from the database");
  }
  return response.json();
}

export async function fetchEdgesFromDB() {
  const response = await fetch(`${API_BASE_URL}/edges`);
  if (!response.ok) {
    throw new Error("Failed to fetch edges from the database");
  }
  return response.json();
}
