import { uniqueLocations } from './Filtereddata.js';

const apiKey = 'f6a97e6d240a4207a9080373ad282d59'; // Replace with your OpenCage API key

const getLatLongOpenCage = async (street, city) => {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(street)},${encodeURIComponent(city)}&key=${apiKey}`;
    console.log('Fetching:', url);

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.results.length > 0) {
            const { lat, lng } = data.results[0].geometry;
            return { street, city, lat, lon: lng };
        } else {
            console.warn('No results found for:', { street, city });
            return { street, city, lat: null, lon: null };
        }
    } catch (error) {
        console.error('Error fetching latitude and longitude:', error);
        return { street, city, lat: null, lon: null };
    }
};

const addLatLongToLocations = async () => {
    try {
        const locationsWithLatLong = await Promise.all(
            uniqueLocations.map(async (location) => {
                const { Street, City } = location;
                const coords = await getLatLongOpenCage(Street, City);
                return { ...location, lat: coords.lat, lon: coords.lon };
            })
        );

        console.log(locationsWithLatLong);

        const jsonOutput = JSON.stringify(locationsWithLatLong, null, 2);
        document.getElementById('jsonOutput').textContent = jsonOutput;
    } catch (error) {
        console.error('Error processing locations:', error);
    }
};

addLatLongToLocations();
