import { useState, useEffect } from 'react';

const Location = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [savedLocations, setSavedLocations] = useState([]);
  const [statusMessage, setStatusMessage] = useState(null); // جديد لعرض الحالة
  const [statusColor, setStatusColor] = useState(''); // جديد لتمثيل اللون (أخضر أو أحمر)

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
            setStatusColor('green'); // أخضر عند النجاح
            fetchSavedLocations(); // Fetch updated saved locations after saving new one
          } catch (err) {
            setError(err.message || 'An error occurred while saving location');
            setStatusMessage('Failed to save location');
            setStatusColor('red'); // أحمر عند الفشل
          } finally {
            setLoading(false);
          }
        },
        (err) => {
          setLoading(false);
          setError('Error getting location: ' + err.message);
          setStatusMessage('Failed to get location');
          setStatusColor('red'); // أحمر في حال فشل الحصول على الموقع
        }
      );
    } else {
      setLoading(false);
      setError('Geolocation not supported by this browser');
      setStatusMessage('Geolocation not supported');
      setStatusColor('red'); // أحمر في حال المتصفح لا يدعم الموقع
    }
  };

  // Fetch saved locations and get geolocation when the component mounts
  useEffect(() => {
    getLocation(); // Fetch location info immediately when component mounts
    fetchSavedLocations(); // Fetch saved locations from backend
  }, []);

  return (
    <div>
      {/* عرض حالة النجاح أو الفشل في الأعلى */}
      {statusMessage && (
        <div
          style={{
            backgroundColor: statusColor,
            width:'20px',
            height:'20px',
            color: 'white',
            padding: '10px',
            textAlign: 'center',
            borderRadius: '5px',
            marginBottom: '20px',
          }}
        >
        </div>
      )}

      {loading && <p>Loading...</p>}
   
    </div>
  );
};

export default Location;
