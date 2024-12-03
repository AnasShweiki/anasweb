import { connectToDatabase } from "../../../../lib/mongodb";

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { latitude, longitude } = req.body;

    if (!latitude || !longitude) {
      return res.status(400).json({ message: 'Latitude and longitude are required' });
    }

    try {
      // Call connectToDatabase to check if it's connected
      const { db } = await connectToDatabase();

      // Continue processing and saving location data...
      const result = await db.collection('locations').insertOne({
        latitude,
        longitude,
        timestamp: new Date(),
      });

      return res.status(201).json({ message: 'Location saved successfully', data: result });
    } catch (error) {
      console.error("Error occurred:", error);
      return res.status(500).json({ message: 'Error saving location', error: error.message });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default handler;
