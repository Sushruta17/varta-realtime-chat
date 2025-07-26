<img src="./frontend/public/Home Page.png" class="logo" width="full"/>

# VARTA – Real-Time MERN Chat App

VARTA is a full-stack chat application powered by the **MERN stack**, real-time messaging with **Socket.io**, and styled with **TailwindCSS** \& **DaisyUI**.


## Features

- **MERN + Socket.io:** Real-time chat with Node/Express, MongoDB, React, and Socket.io
- **JWT Secure Auth:** User authentication \& authorization
- **Online Status:** Track which users are online
- **Zustand Global State:** Modern React state management
- **Cloudinary Uploads:** Media/profile uploads


## Project Structure

```
varta-realtime-chat/
│
├── backend/      # Express REST API & Socket.io server
││   ├── src/
││   └── package.json
│
├── frontend/     # React client (Vite, Zustand, TailwindCSS)
││   ├── src/
││   └── package.json
│
├── .gitignore
├── README.md   
├── package.json  
```


## Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/Sushruta17/varta-realtime-chat.git
cd varta-realtime-chat
```

2. **Install All Dependencies**

```bash
npm run build

```

Alternatively, install manually:

```bash
cd backend
npm install

cd ../frontend
npm install
```

3. **Configure Environment Variables**

Create a `.env` file in `/backend/`:

```
MONGODB_URI=your-mongodb-uri
PORT=5001
JWT_SECRET=your-jwt-secret

CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

NODE_ENV=development
```

4. **Run the Application**
- **Backend**

```bash
cd backend
npm run dev
```

- **Frontend**

```bash
cd ../frontend
npm run dev
```

From the root (after build), start the backend in production:

```bash
npm run start
```