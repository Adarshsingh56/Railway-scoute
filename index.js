const button1 = document.querySelector(".button1");
const place = document.querySelector(".place");


const loadingScreen =document.querySelector(".loadingScreen");


function getLocation() {
    const output = document.getElementById('location-output');
    
    // Check if geolocation is supported
    if (navigator.geolocation) {
        // Get the current position
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        output.innerHTML = "Geolocation is not supported by this browser.";
    }
}

// Function to display the position
function showPosition(position) {
    const output = document.getElementById('location-output');
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    
    output.innerHTML = `Latitude: ${latitude} <br> Longitude: ${longitude}`;
    getCityName(latitude, longitude);
    primary.ClassList.add("active");
}

// Function to handle errors
function showError(error) {
    const output = document.getElementById('location-output');
    switch(error.code) {
        case error.PERMISSION_DENIED:
            output.innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            output.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            output.innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            output.innerHTML = "An unknown error occurred.";
            break;
    }
}





/*async function getCityName(lat, lng) {
    const output = document.getElementById('location-output');
    const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data && data.address) {
            // Extract the city, town, or village from the response
            const city = data.address.city || data.address.town || data.address.village || "Unknown location";
            output.innerHTML = ` ${city}`;
            return city;
        } else {
            return "City not found";
        }
    } catch (error) {
        console.error('Error fetching city name:', error);
        return "Error retrieving location";
    }
}*/


