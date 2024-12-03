import { MongoClient } from 'mongodb';

// MongoDB URI directly in the code
const client = new MongoClient('mongodb+srv://AnasShweiki:Anas123@cluster0.16wwo.mongodb.net/locationDB');

// Cached client and db variables
let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  try {
    console.log("Attempting to connect to MongoDB...");
    
    // Try to connect to MongoDB
    if (!client.isConnected()) {
      await client.connect();
    }

    cachedClient = client;
    cachedDb = client.db('locationDB');
    
    console.log("Connected to MongoDB successfully!");

    return { client: cachedClient, db: cachedDb };
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw new Error('Could not connect to MongoDB');
  }
}
