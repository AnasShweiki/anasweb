import { useState, useEffect } from 'react';

const Location = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [savedLocations, setSavedLocations] = useState([]);
  const [statusMessage, setStatusMessage] = useState(null); // Message to display the status
  const [statusColor, setStatusColor] = useState(''); // Color to represent the status (green or red)

  // Fetch saved locations from the backend
  const fetchSavedLocations = async () => {
    try {
      const response = await fetch('https://getloc-4qst.onrender.com/save-location');
      if (!response.ok) {
        throw new Error('Failed to fetch saved locations');
      }
      const data = await response.json();
      setSavedLocations(data.locations); // Assuming the response contains an array of locations
    } catch (err) {
      setError(err.message || 'An error occurred while fetching locations');
    }
  };

  // Function to get geolocation and fetch city, country, and IP info
  const getLocation = async () => {
    setLoading(true);
    setError(null);
    setStatusMessage(null); // Reset the status message each time the function is called

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });

          try {
            // Fetch city, country, and IP address from ipinfo.io (using your token)
            const geoResponse = await fetch(`https://ipinfo.io/json?token=ee55145fa50a10`);
            const geoData = await geoResponse.json();
            const { city, country, ip } = geoData;

            // Prepare the full location object
            const fullLocation = { latitude, longitude, city, country, ip };

            // Send the full location data to your backend API
            const response = await fetch('https://getloc-4qst.onrender.com/save-location', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(fullLocation),
            });

            if (!response.ok) {
              throw new Error('Failed to save location');
            }

            const data = await response.json();
            console.log('Location saved:', data);
            setStatusMessage('Location saved successfully!');
            setStatusColor('green'); // Green for success
            fetchSavedLocations(); // Fetch updated saved locations after saving the new one
          } catch (err) {
            setError(err.message || 'An error occurred while saving location');
            setStatusMessage('Failed to save location');
            setStatusColor('red'); // Red for failure
          } finally {
            setLoading(false);
          }
        },
        (err) => {
          setLoading(false);
          setError('Error getting location: ' + err.message);
          setStatusMessage('Failed to get location');
          setStatusColor('red'); // Red for error
        },
        {
          enableHighAccuracy: true, // Ensure the browser tries to get the most accurate location
          timeout: 10000, // Set a timeout for the geolocation request
          maximumAge: 0, // Don't use any cached location
        }
      );
    } else {
      setLoading(false);
      setError('Geolocation not supported by this browser');
      setStatusMessage('Geolocation not supported');
      setStatusColor('red'); // Red for unsupported geolocation
    }
  };

  // Automatically fetch saved locations and get location on page load
  useEffect(() => {
    getLocation(); // Fetch location info immediately when component mounts
    fetchSavedLocations(); // Fetch saved locations from backend when component mounts
  }, []);

  return (
    <div>
      {/* Display status message with color */}
      {statusMessage && (
        <div
          style={{
            backgroundColor: statusColor,
            color: 'white',
            padding: '10px',
            textAlign: 'center',
            borderRadius: '5px',
            marginBottom: '20px',
            width: '100%',
            maxWidth: '300px',
            margin: '0 auto',
          }}
        >
        </div>
      )}

      {loading && <p>Loading...</p>}

      {/* Button to trigger location fetch again */}
      <button
        onClick={getLocation}
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50', // Green color for the button
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          marginBottom: '20px',
        }}
      >
      </button>

      {/* Display saved locations */}
     

      {error && <p style={{ color: 'red' }}></p>}
    </div>
  );
};

export default Location;
