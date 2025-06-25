# 🏠 RoomMate – Roommate Finder Platform

RoomMate is a full-stack web platform that helps individuals find compatible roommates based on location, budget, lifestyle preferences, and interests. Users can create listings, connect via chat, and safely manage their own posts.

---

## 🌐 Live Website

🔗 [Visit Live Site](https://roommate-finder-e1587.web.app)

---

## 🖼️ Screenshot

![RoomMate Screenshot](https://i.ibb.co/sample-image.png) <!-- Replace with your screenshot URL -->

---

## 🎯 Project Purpose

The goal of RoomMate is to simplify the roommate-hunting process through:
- Filterable search by budget, location, lifestyle
- Secure profile creation and login system
- Control over personal listings with full CRUD capability
- A clean, responsive UI with a smooth experience across all devices

---

## 🚀 Technologies Used

### 🧩 Frontend:
- React
- React Router DOM
- Tailwind CSS
- DaisyUI
- Swiper.js (Banner Slider)
- React Toastify
- React Icons
- React Helmet for dynamic titles

### 🔐 Authentication:
- Firebase Authentication (Email/Password + Google)

### 🗂 Backend:
- Node.js
- Express.js
- MongoDB (Native Driver)
- JSON Web Token (JWT)

### 🚀 Deployment:
- Client: Firebase Hosting
- Server: Vercel

---

## ✨ Key Features

- 🧭 Navbar with conditional Login/Logout and user avatar
- 🔐 Protected routes for Add, My Listings, and Details pages
- 🧾 Add roommate post with location, rent, lifestyle, contact info
- 🔎 Browse roommate listings dynamically from MongoDB
- ✅ Update/Delete functionality for logged-in user's own posts
- 📲 Responsive design (Mobile, Tablet, Desktop)
- 🧩 Banner slider using Swiper.js
- 📌 Dynamic titles per route
- 🔐 JWT + Firebase Authentication with secure API
- 👍 Like-to-reveal-contact system (challenge feature)
- 🌙 Dark/Light theme toggle support
- 🎉 Toast/SweetAlert feedback on all actions
- ❌ 404 page and loading spinner support
- 🔥 .env variables used to protect credentials

---

## 📦 Dependencies

### Client-Side

- `react`
- `react-router-dom`
- `tailwindcss` + `daisyui`
- `swiper`
- `firebase`
- `react-toastify`
- `react-icons`
- `react-helmet`
- `sweetalert2`
- `react-tooltip`
- `react-awesome-reveal` / `react-simple-typewriter` / `lottie-react` *(any two for animation)*

### Server-Side

- `express`
- `cors`
- `dotenv`
- `mongodb`
- `jsonwebtoken`
- `cookie-parser`

---

## 🛠️ How to Run Locally

### Step 1: Clone the Repositories

```bash
# Client
git clone https://github.com/redoy49/roommate-client.git

# Server
git clone https://github.com/redoy49/roommate-server.git
```

### Step 2: Install Dependencies

```bash
# Client
cd roommate-client
npm install

# Server
cd roommate-server
npm install
```

### Step 3: Configure Environment Variables

#### ⚙️ Client `.env`

```ini
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_BACKEND_BASE_URL=https://your-vercel-server-url.com
```

#### ⚙️ Server `.env`

```ini
PORT=5000
DB_USER=your_mongo_user
DB_PASS=your_mongo_pass
JWT_SECRET=your_jwt_secret
CLIENT_URL=https://roommate-finder-e1587.web.app
```

### Step 4: Run the Project

```bash
# Run Server
npm run dev

# Run Client
npm run dev
```

---

## 🔗 Relevant Links

- 🔴 Live Website: https://roommate-finder-e1587.web.app  
- 🟠 Client GitHub Repo: https://github.com/redoy49/roommate-client  
- 🟢 Server GitHub Repo: https://github.com/redoy49/roommate-server

---

## 📌 Notes

✅ Store Firebase and MongoDB credentials in `.env`  
✅ Protect all private routes using Firebase + JWT  
✅ Show toast/sweet alerts for actions (login, add, update, delete)  
✅ Use Helmet for dynamic titles  
❌ Do not use lorem ipsum or default alerts

---

## 👤 Author
 
🐦 Twitter: [@mdredoyhasan49](https://twitter.com/mdredoyhasan49)  
📧 Email: your@email.com
