<img src="./frontend/public/Home Page.png" class="logo" width="full"/>

# VARTA - Real-Time Chat Application

VARTA is a modern, real-time chat application built using the MERN stack (MongoDB, Express.js, React, Node.js). It enables users to communicate seamlessly with features like instant messaging, online status indicators, and secure authentication. The app leverages Socket.io for real-time communication, making it ideal for personal or group chats.

## Highlights

- ⭐ **Tech Stack**: MERN (MongoDB, Express.js, React, Node.js) + Socket.io + Tailwind CSS + Daisy UI
- 🔐 **Secure Authentication \& Authorization**: User login and access control using JWT
- 💬 **Instant Messaging**: Real-time chat functionality powered by Socket.io
- 📡 **User Online Status**: Live indicators for active users
- 🗂️ **State Management**: Centralized handling with Zustand


## Tech Stack Overview

### Backend (Node.js + Express.js)

- **Dependencies** (from `backend/package.json`):
    - bcryptjs: For password hashing
    - cloudinary: For image/media uploads (e.g., profile pictures or chat attachments)
    - express: Web framework
    - jsonwebtoken: For JWT-based authentication
    - mongoose: ODM for MongoDB
    - socket.io: For real-time bidirectional communication
- **Dev Dependencies**:
    - nodemon: For auto-restarting the server during development
- **Main Entry**: `src/index.js` – Sets up the Express server, connects to MongoDB, configures routes (auth and messages), and integrates Socket.io.


### Frontend (React)

- **Dependencies** (from `frontend/package.json`):
    - @lottiefiles/dotlottie-react: For animations
    - @tailwindcss/postcss and @tailwindcss/vite: Tailwind CSS integration
    - axios: For API requests
    - daisyui: UI components library
    - lucide-react: Icon library
    - react, react-dom: Core React libraries
    - react-hot-toast: For notifications
    - react-router-dom: For client-side routing
    - socket.io-client: Client-side Socket.io integration
    - tailwindcss: Utility-first CSS framework
    - zustand: Lightweight state management
- **Dev Dependencies**:
    - ESLint and related plugins: For code linting
    - Vite: Build tool and development server
    - Autoprefixer and PostCSS: For CSS processing
- **Main Entry**: `App.jsx` – Handles routing (e.g., Home, SignUp, Login, Profile pages), authentication checks using Zustand, theme management, and loading states.


## Prerequisites

- Node.js (v16+ recommended)
- MongoDB (local or cloud instance like MongoDB Atlas)
- Cloudinary account (for media uploads)
- npm or yarn package manager


## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/varta.git
cd varta
```


### 2. Setup Environment Variables

Create a `.env` file in the `backend` directory with the following variables. Replace placeholders with your actual values.

```
MONGODB_URI=mongodb://localhost:27017/varta  # Or your MongoDB Atlas URI
PORT=5001
JWT_SECRET=your-secret-key  # A strong secret for JWT signing

CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret

NODE_ENV=development  # Change to 'production' for deployment
```

For more details on setting up `.env`, refer to [this guide](https://github.com/burakorkmez/fullstack-chat-app/blob/master/README.md#setup-env-file).

### 3. Install Dependencies

#### Backend

```bash
cd backend
npm install
```


#### Frontend

```bash
cd frontend
npm install
```


### 4. Run the Application

#### Backend (Development Mode)

```bash
cd backend
npm run dev  # Uses nodemon to watch for changes
```

This starts the server on `http://localhost:5001` (or your specified PORT) and connects to MongoDB.

#### Frontend (Development Mode)

```bash
cd frontend
npm run dev  # Uses Vite for hot reloading
```

This starts the React app on `http://localhost:5173` (default Vite port). The frontend is configured to communicate with the backend via CORS (origin: http://localhost:5173).

### 5. Build for Production

#### Frontend

```bash
cd frontend
npm run build
```

This generates a `dist` folder that can be served statically.

#### Backend

For production, update `NODE_ENV=production` in `.env` and run:

```bash
node src/index.js
```


## Usage

- **Sign Up/Login**: Navigate to `/signup` or `/login` to create an account or log in.
- **Chat Interface**: Once authenticated, access the home page to start chatting. Real-time updates will show messages and online statuses.
- **Profile**: View and edit user profiles at `/profile`.
- **Notifications**: Uses react-hot-toast for in-app alerts.


## Folder Structure Overview

- **backend/**
    - `src/index.js`: Server setup, routes, and Socket.io integration.
    - `routes/`: API routes for auth and messages.
    - `lib/`: Utilities like DB connection and Socket.io config.
    - `package.json`: Backend dependencies and scripts.
- **frontend/**
    - `App.jsx`: Main app component with routing and auth checks.
    - `components/`: Reusable UI components (e.g., Navbar).
    - `pages/`: Page components (e.g., HomePage, LoginPage).
    - `store/`: Zustand stores for auth and theme.
    - `package.json`: Frontend dependencies and scripts.


## Contributing

Feel free to fork the repository and submit pull requests. For issues, open a ticket on GitHub.

## License

This project is licensed under the ISC License (as specified in `backend/package.json`).

## Acknowledgments

- Inspired by modern chat apps like WhatsApp or Slack.
- Built with open-source tools: MERN, Socket.io, Tailwind, and more.

If you need further adjustments or more changes, just let me know!

<div style="text-align: center">⁂</div>

[^1]: package.json

[^2]: index.js

[^3]: package.json

[^4]: App.jsx

