/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const env = {
  apiKey: "AIzaSyBWQndv7iiYWDOg7Ue94sJqZNNpqwU9Mtg",
  authDomain: "blogs-2817d.firebaseapp.com",
  projectId: "blogs-2817d",
  storageBucket: "blogs-2817d.appspot.com",
  messagingSenderId: "732836131835",
  appId: "1:732836131835:web:0a6dcb0719afe935ced15e",
  measurementId: "G-07FPQRPG0R",
};


module.exports = { nextConfig, env };
