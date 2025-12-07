# Quick Start Guide

## Installation

1. Install dependencies:
```bash
npm install
```

## Firebase Configuration

**IMPORTANT**: Before running the app, you must configure Firebase:

1. Follow the instructions in `FIREBASE_SETUP.md`
2. Update `src/firebase/config.js` with your Firebase credentials

## Running the Application

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to the URL shown (usually `http://localhost:5173`)

## Features Overview

### Pages & Routes

- **Home (`/`)**: Browse all products from the API
- **Login (`/login`)**: Sign in with email/password, Google, or GitHub
- **Register (`/register`)**: Create a new account
- **Dashboard (`/dashboard`)**: Protected route - view profile and orders (requires login)
- **Product Details (`/products/:id`)**: View detailed product information
- **Order Page (`/order/:id`)**: Protected route - place an order (requires login)
- **404 Page (`/*`)**: Not found page for invalid routes

### Authentication

- Email & Password authentication
- Google Sign-In
- GitHub Sign-In
- Protected routes that redirect to login if not authenticated

### API Integration

- Uses FakeStore API (https://fakestoreapi.com)
- Fetches products dynamically
- Loading and error states handled

### Responsive Design

- Mobile-friendly layout
- Desktop optimized
- Works on all screen sizes

## Testing the Application

1. **Test Public Routes**:
   - Visit home page and browse products
   - Click on a product to see details

2. **Test Authentication**:
   - Try registering with email/password
   - Try logging in with Google
   - Try logging in with GitHub

3. **Test Protected Routes**:
   - Try accessing `/dashboard` without logging in (should redirect to login)
   - After logging in, access dashboard
   - View product details and try to place an order

4. **Test Dynamic Routes**:
   - Click on different products to see different product detail pages
   - Place orders to see different order pages

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

You can deploy to:
- **Netlify**: Connect your GitHub repo or drag & drop the `dist` folder
- **Vercel**: Connect your GitHub repo or use Vercel CLI
- **Firebase Hosting**: Use `firebase deploy`

Make sure to update Firebase authorized domains with your production URL!

