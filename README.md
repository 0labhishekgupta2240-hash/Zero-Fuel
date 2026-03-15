# EV Scooty Rental Website Project

## Overview
The EV Scooty Rental platform is designed for customers to easily rent electric scooters in urban areas. The objective is to provide a convenient, eco-friendly transportation solution while enhancing the accessibility of electric vehicles.

## Features
- **User Registration/Login**: Users can create an account and log in to manage their bookings.
- **Scooter Listings**: A visible list of available scooters, displaying details like battery life, rental price, and scooter descriptions.
- **Booking System**: Users can select a scooter and book it for a specified time period, including real-time availability checks.
- **Payment Integration**: Secure payment options allow users to pay for their bookings.
- **User Reviews/Feedback**: Users can leave reviews on their experiences with the scooters.
- **Admin Panel**: A backend management system for admins to oversee scooter inventory and user bookings.
- **Location-based Services**: Users can find nearby scooter locations via integrated GPS.

## Setup Instructions
1. **Pre-requisites**:
   - Node.js (v12 or higher)
   - MongoDB (for database management)
   - Git (for version control)

2. **Clone the Repository**:
   ```bash
   git clone https://github.com/0labhishekgupta2240-hash/Zero-Fuel.git
   cd Zero-Fuel
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory and configure:
     ```
     DATABASE_URL=<your_database_url>
     PORT=3000
     SECRET_KEY=<your_secret_key>
     ```

5. **Run the Application**:
   ```bash
   npm start
   ```
   - Access the application at `http://localhost:3000`.

## Technology Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Gateway**: Stripe API
- **Deployment**: Heroku or similar cloud platform

## Future Enhancements
- **Mobile Application**: Develop an accompanying mobile app for easier booking.
- **Loyalty Program**: Implement a reward system for frequent users.
- **Advanced Analytics**: Integrate analytics tools to track user engagement and scooter usage.
- **Sustainability Reports**: Provide reports on the reduction of carbon footprint by users.
- **Increased Fleet**: Expand the number of available scooters to meet demand.