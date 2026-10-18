# 🌟 Employee Directory

A modern, responsive Employee Directory built using React and Tailwind CSS. It fetches employee information from an API and displays it in beautiful profile cards with images, hover animations, colourful gradients, and a loading spinner.

## 🚀 Features

- 📡 Fetches user data using the Fetch API
- ⏳ Loading spinner while fetching employee data
- ⚠️ API error handling with error messages
- 👤 Displays employee names and usernames
- 🖼️ Profile images using Pravatar
- 📧 Email and website information
- 📍 Employee address details
- 🏢 Company information
- 📞 Contact numbers
- 🎨 Colourful gradient background and cards
- ✨ Smooth hover animations and shadows
- 📱 Responsive Flexbox layout

## 🛠️ Technologies Used

- React.js
- Tailwind CSS
- React Hooks (`useState`, `useEffect`)
- Fetch API
- Async/Await
- JSONPlaceholder API
- Pravatar Image Service

## 🌐 APIs Used

### 1. Employee Data

https://jsonplaceholder.typicode.com/users

Provides sample user information such as names, usernames, emails, addresses, phone numbers, websites, and company details.

### 2. Profile Images

https://i.pravatar.cc/

Provides sample avatar images for employee cards.

## ⏳ Loading Spinner

- Displays a loading spinner while employee data is being fetched.
- Uses Tailwind CSS animation classes for the rotating spinner.
- Uses React `useState` to manage the loading state.
- Stops loading after the request completes, whether successful or unsuccessful.

## ⚠️ Error Handling

- Checks the API response using `response.ok`.
- Handles errors using `try/catch`.
- Uses `finally` to stop the loading spinner after the request finishes.

## 📱 Responsive Design

- **Mobile:** One card per row
- **Tablet:** Two cards per row
- **Desktop:** Three cards per row
- **Last row:** Remaining cards are centered automatically

## 🎨 UI Highlights

- Light pastel gradient background
- White profile cards
- Violet, fuchsia, and pink accents
- Rounded corners and soft shadows
- Hover lift and image zoom effects
- Cyan and violet animated loading spinner

## ⚠️ Note

This project uses JSONPlaceholder sample data and external avatar images. The profile images are illustrative and do not necessarily represent the actual users.

<hr>

Created with 💜 using React and Tailwind CSS.
