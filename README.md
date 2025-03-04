🧠 Psychological Services App

📌 Project Overview

The Psychological Services App is a web application designed to help users connect with professional psychologists. The app provides a platform where users can browse a list of psychologists, sort them based on different criteria, save favorites, and book consultations.

✨ Key Features

🏠 Home Page

A welcoming interface displaying the company's slogan.

A call-to-action button that directs users to the list of available psychologists.

📋 Psychologists Page

Displays a list of psychologists with key details such as name, experience, specialization, price per hour, and rating.

Sorting options to arrange psychologists by name, price, or popularity.

A "Load more" button to fetch additional psychologists from the database.

Ability to view more details about each psychologist by clicking "Read more."

❤️ Favorites Page (Private)

Accessible only to authenticated users.

Displays psychologists marked as favorites.

Users can remove psychologists from favorites.

🔐 Authentication

User registration and login using Firebase Authentication.

Secure data retrieval for authenticated users.

Logout functionality.

📦 Firebase Integration

Psychologists' data stored in Firebase Realtime Database.

Users' favorite psychologists stored in Firebase or localStorage.

Authentication management via Firebase Authentication.

📅 Appointment Booking

A modal form to book an appointment with a psychologist.

Form validation using react-hook-form & yup.

Modal closes on clicking outside, pressing Esc, or clicking the close button.

🌐 Routing

Implemented using React Router.

Protected routes for private pages (e.g., Favorites).

🛠 Technologies Used

React – for building the user interface.

React Router – for managing navigation.

Redux Toolkit – for state management.

Firebase – for authentication and database storage.

react-hook-form & yup – for form handling and validation.

Axios – for making API requests.

Styled Components / Tailwind CSS / Material UI – for styling.

ESLint & Prettier – for code formatting and quality assurance.

🏗 Installation Instructions

1️⃣ Clone the Repository

git clone https://github.com/yourusername/psychological-services-app.git
cd psychological-services-app

2️⃣ Install Dependencies and Run

npm install
npm run dev

The application will be accessible at:👉 http://localhost:5173

📖 How to Use

Visit the Home Page to learn about the service.

Go to the Psychologists Page to browse available professionals and sort them based on your preference.

Click Read More for detailed information about a psychologist.

If authenticated, click the heart icon to add psychologists to Favorites.

Click Make an Appointment to schedule a session.

Navigate to the Favorites Page to review saved psychologists.

🚀 Deployment

The project is deployed on GitHub Pages / Netlify / Vercel:🔗 Live Demo

👤 Author

Name: Yaroslav Terno📧 Email: yroslavterno@gmail.com🔗 LinkedIn: Yaroslav Terno
