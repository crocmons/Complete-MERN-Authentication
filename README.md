# Complete-MERN-Authentication
Complete Authentication in MERN Stack
# mern-auth

! Final App : https://complete-mern-auth.vercel.app
Minimal full-stack MERN app with authentication using passport and JWTs.

This project uses the following technologies:

- [React](https://reactjs.org) and [React Router] for frontend
- [Express](http://expressjs.com/) and [Node](https://nodejs.org/en/) for the backend
- [MongoDB](https://www.mongodb.com/) for the database

## Full Stack Development

- [Build a Login/Auth App with the MERN Stack — Part 1 (Backend)](https://complete-mern-authentication.onrender.com)
- [Build a Login/Auth App with the MERN Stack — Part 2 (Frontend Setup)](https://complete-mern-auth.vercel.app/)


## Configuration

Make sure to add your own `MONGOURL` from your [mLab](http://mlab.com) database in `config/keys.js`.

```env file

  MONGO_URL: "YOUR_MONGO_URI_HERE",
  SECRET_KEY: process.env.SECRET_KEY

```

## Quick Start

```javascript
// Install dependencies for server & client
npm install && npx create-react-app .

// Run client & server with concurrently
npm start

// Server runs on http://localhost:8010 and client on http://localhost:3000
```

For Deploying The FrontEnd, Backend I Use Vercel & Render.
