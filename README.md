# 🏠 RoomMate – Roommate Finder Platform

RoomMate is a full-stack web platform designed to help individuals find compatible roommates based on shared preferences such as location, budget, lifestyle, and personal interests. Users can create listings, browse others’ posts, and manage their interactions — all within a clean and responsive interface.

---

## 🌐 Live Website

🔗 [Visit Live Site](https://roommate-finder-e1587.web.app)

---

## 🖼️ Screenshot

![RoomMate Screenshot](https://i.ibb.co/sample-image.png) <!-- Replace with your actual screenshot URL -->

---

## 🎯 Project Purpose

RoomMate was built to modernize and simplify the roommate-hunting experience through:
- Smart filtering for lifestyle compatibility
- Full control over personal roommate listings
- Safe and private user experience using authentication and access control
- Optimized UX/UI for mobile and desktop users

---

## 🚀 Technologies Used

### 🧩 Frontend
- React
- React Router DOM
- Tailwind CSS + DaisyUI
- Swiper.js (for banners)
- React Toastify & SweetAlert2
- React Icons
- React Helmet (for dynamic page titles)

### 🔐 Authentication
- Firebase Authentication (Email/Password + Google login)

### 🗂 Backend
- Node.js + Express.js
- MongoDB (Native Driver)
- JSON Web Token (JWT)

### 🚀 Deployment
- **Client:** Firebase Hosting  
- **Server:** Vercel

---

## ✨ Highlighted Features

- 🔍 **Smart Filtering:** Browse roommate listings by rent, location, lifestyle habits, and more
- 🧾 **Post Management:** Add, update, and delete your own roommate listings
- ✅ **Authenticated Access:** Only logged-in users can post or edit listings
- 🎭 **Dynamic Contact Reveal:** Users must interact (like) to reveal contact info — adds privacy
- 🌙 **Dark/Light Theme Toggle:** Easily switch between light and dark modes
- 🧭 **Interactive UI:** Swiper slider banners, dynamic route titles, custom toast/alert feedback
- 📱 **Fully Responsive:** Optimized for mobile, tablet, and desktop
- 🔐 **Secure Backend APIs:** Protected routes using JWT; client uses Firebase-authenticated tokens
- ⚙️ **Environment-based Config:** API keys and secrets managed via `.env` files
- ❌ **404 Page + Loaders:** Graceful handling of unknown routes and loading states

---

## 📦 Dependencies

### Frontend

- `react`
- `react-router-dom`
- `tailwindcss` + `daisyui`
- `swiper`
- `firebase`
- `react-toastify`
- `sweetalert2`
- `react-helmet`
- `react-icons`
- `react-tooltip`
- `react-awesome-reveal` / `react-simple-typewriter` / `lottie-react` *(any two for animations)*

### Backend

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

- 🔐 Store Firebase and MongoDB credentials securely using `.env` files
- ✅ Protect all private routes using Firebase Auth + JWT
- ✅ Provide user feedback using Toast and SweetAlert
- 🧠 Use Helmet for SEO-friendly dynamic titles
- ❌ Avoid placeholder content or generic UI messages

---

## 👤 Author

🔗 Portfolio: [your-portfolio-link]  
🐦 Twitter: [@mdredoyhasan49](https://twitter.com/mdredoyhasan49)  
📧 Email: your@email.com
