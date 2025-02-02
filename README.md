# BeyondChats - AI Chatbot Setup Platform

BeyondChats is a React.js-based chatbot setup platform designed to provide a seamless chatbot integration experience. The project features Firebase authentication with email verification, dynamic UI interactions powered by Framer Motion, dummy web scraping for organization setup, and an intuitive, mobile-responsive UI/UX.

## 🚀 Deployed Link :- ("https://beyondchatsapp.netlify.app/")

## 🚀 Features

### 🔐 Firebase Authentication

- User registration and login using Firebase Authentication.
- Email verification flow to ensure secure access.
- Google Sign-in support for a faster authentication experience.

### 🤖 AI Chatbot Integration

- Test chatbot functionality using Dummy data.
- Integration options for embedding the chatbot into external websites.

### 📊 Organization Setup & Dummy Scraping

- Users can set up their organization by entering a website URL.
- Dummy scraping process to simulate extracting website information.
- Real-time scraping status updates.

### 🎭 Framer Motion Animations

- Smooth UI transitions and animations for an enhanced user experience.
- Animated success screens with confetti effects.

### 📱 Responsive UI/UX

- Fully mobile-responsive design with modern aesthetics.
- Intuitive navigation and a step-by-step guided setup process.

## 📂 Project Structure

```
📦 BeyondChats ├── 📁 frontend │ ├── 📁 src │ │ ├── 📁 components │ │ │ ├── Shared (Reusable UI Components) │ │ │ ├── ChatIntegration (Chatbot Components) │ │ │ ├── Authentication (Auth-related Components) │ │ ├── 📁 pages │ │ │ ├── Registration.jsx (User Authentication) │ │ │ ├── SetupOrganization.jsx (Organization Setup) │ │ │ ├── Success.jsx (Success Screen) │ │ │ ├── ContactUs.jsx (Contact Page) │ │ ├── App.js (Main Application File) │ │ ├── firebase.js (Firebase Configuration) │ │ ├── routes.js (Routing Configuration) ├── 📁 backend │ ├── 📁 Controllers │ │ ├── scrapingStatus.js │ ├── 📁 Models │ │ ├── ScrapedPage.js │ ├── 📁 Routes │ │ ├── scrapingRoutes.js │ ├── 📁 Utils │ │ ├── scraper.js │ ├── .env │ ├── package-lock.json │ ├── package.json │ ├── server.js ├── 📄 readme.md

```

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/aniruddhsingh23/beyondchats-assignment.git
cd beyondchats
```

### 2️⃣ Install Dependencies

2. **Install dependencies for both frontend and backend:**

- **Frontend:**

  ```
  cd frontend
  npm install
  ```

- **Backend:**
  ```
  cd backend
  npm install
  ```

3. **Set up Firebase:**

- Go to Firebase console and create a new project.
- Set up authentication for email/password and Google login.
- Download the Firebase config and add it to `frontend/src/firebase.js`.

4. **Set up environment variables:**

- Create a `.env` file in the `backend` folder.
- Add your MONGODB_URI and PORT.

## Running the Project

To run the project in development mode:

1. **Start the backend server:**

2. **Start the frontend app:**

### 3️⃣ Configure Firebase

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Enable Authentication (Email/Password & Google Sign-in).
3. Obtain your Firebase config and update `firebase.js` in the project.

## 🏗️ Tech Stack

- **Frontend:** React.js, Framer Motion
- **Backend:** Firebase Authentication, Firebase Firestore
- **Hosting:** Firebase Hosting
- **UI Components:** Tailwind CSS, ShadCN/UI
- **Charts & Visualization:** Chart.js

## 📜 License

This project is licensed under the MIT License.

## 📞 Contact

For any questions or suggestions, feel free to reach out!

- **Email:** anirudhbhadauriya@gmail.com

---

Give this repo a ⭐ if you found it helpful! 😊
