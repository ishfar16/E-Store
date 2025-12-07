# E-Commerce Store - React Application

A modern single-page web application built with React, React Router, Firebase Authentication, and API integration.

## Features

- 🔐 Firebase Authentication (Email/Password, Google, GitHub)
- 🛣️ React Router with protected routes
- 📱 Responsive design (mobile & desktop)
- 🛍️ Product browsing and details
- 🛒 Shopping cart and orders
- 🔄 Dynamic routing
- ⚡ Real-time API data fetching

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Configure Firebase:
   - Create a Firebase project at https://console.firebase.google.com
   - Enable Authentication (Email/Password, Google, GitHub)
   - Copy your Firebase config to `src/firebase/config.js`

3. Run the development server:
```bash
npm run dev
```

## Firebase Configuration

Update `src/firebase/config.js` with your Firebase credentials:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
```

## Project Structure

```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── context/       # React Context (Auth)
├── firebase/      # Firebase configuration
├── styles/        # CSS files
└── utils/         # Utility functions
```

## Routes

- `/` - Home page
- `/login` - Login page
- `/register` - Register page
- `/dashboard` - Protected dashboard
- `/products/:id` - Product details (dynamic)
- `/order/:id` - Order details (dynamic)
- `/*` - 404 Not Found

