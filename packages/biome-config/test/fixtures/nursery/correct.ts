/**
 * Nursery rules correct examples.
 *
 * Demonstrates patterns that pass all nursery rules:
 * - noFloatingPromises: All promises properly handled
 * - noMisusedPromises: Promises used correctly
 */

import { readFile } from 'node:fs/promises';

/**
 * ✅ Correct: Promises are properly awaited
 */
async function fetchUserData(userId: string) {
  try {
    const response = await fetch(`/api/users/${userId}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw error;
  }
}

/**
 * ✅ Correct: Promise returned from function
 */
function loadConfiguration(): Promise<string> {
  return readFile('./config.json', 'utf-8');
}

/**
 * ✅ Correct: Promise properly caught
 */
function handleAsync() {
  fetch('/api/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

/**
 * ✅ Correct: void operator for intentional fire-and-forget
 */
function logAsync(message: string) {
  void fetch('/api/log', {
    body: JSON.stringify({ message }),
    headers: { 'Content-Type': 'application/json' },
    method: 'POST'
  });
}

/**
 * ✅ Correct: Promises not misused in conditionals
 */
async function checkUserStatus(userId: string): Promise<boolean> {
  const user = await fetchUserData(userId);

  return user.isActive;
}

/**
 * ✅ Correct: Configuration via environment variables
 */
const config = {
  apiKey: process.env.API_KEY || '',
  apiUrl: process.env.API_URL || 'https://api.example.com',
  database: {
    host: process.env.DB_HOST || 'localhost',
    password: process.env.DB_PASSWORD || '',
    port: Number.parseInt(process.env.DB_PORT || '5432', 10),
    user: process.env.DB_USER || 'postgres'
  }
};

/**
 * ✅ Correct: No hardcoded secrets
 */
function connectToService() {
  const token = process.env.SERVICE_TOKEN;

  if (!token) {
    throw new Error('SERVICE_TOKEN environment variable is required');
  }

  return fetch('https://api.service.com/connect', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export { checkUserStatus, config, connectToService, fetchUserData, handleAsync, loadConfiguration, logAsync };
