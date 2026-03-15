// script.js

// Sample booking system for bike rental

// Function to handle booking form submission
function bookBike() {
    const bikeType = document.getElementById('bikeType').value;
    const rentalPeriod = document.getElementById('rentalPeriod').value;
    const bookingDate = document.getElementById('bookingDate').value;

    if (bikeType && rentalPeriod && bookingDate) {
        // Simulate booking process
        console.log(`Booking ${bikeType} for ${rentalPeriod} on ${bookingDate}`);
        alert(`Successfully booked ${bikeType} for ${rentalPeriod}.`);
    } else {
        alert('Please fill in all fields.');
    }
}

// Function to display available bikes
function displayAvailableBikes() {
    const bikes = ['Mountain Bike', 'Road Bike', 'Electric Bike'];
    const bikeList = document.getElementById('bikeList');
    bikeList.innerHTML = '';
    bikes.forEach(bike => {
        const li = document.createElement('li');
        li.textContent = bike;
        bikeList.appendChild(li);
    });
}

// Run this function on window load
window.onload = () => {
    displayAvailableBikes();
};