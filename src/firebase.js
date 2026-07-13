import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ─────────────────────────────────────────────────────────────────────────────
// TODO: Replace ALL placeholder values below with your real Firebase config.
//
// How to get your config:
//  1. Go to https://console.firebase.google.com
//  2. Create a project (or open an existing one)
//  3. Project Settings → Your apps → Add app → Web (</>)
//  4. Copy the firebaseConfig object and paste it here
//  5. In the Firebase console, enable Authentication:
//     Build → Authentication → Sign-in method → Email/Password → Enable
// ─────────────────────────────────────────────────────────────────────────────
const firebaseConfig = {
    apiKey: "AIzaSyAjlfdoC2AQ53tk7kvot3BIusrRgDv5q-s",
    authDomain: "natural-cocos.firebaseapp.com",
    projectId: "natural-cocos",
    storageBucket: "natural-cocos.firebasestorage.app",
    messagingSenderId: "562126123616",
    appId: "1:562126123616:web:808c37f9603999a91a8905",
    measurementId: "G-1JWY2GLJ7Q"

//   apiKey:            "YOUR_API_KEY",
//   authDomain:        "YOUR_AUTH_DOMAIN",
//   projectId:         "YOUR_PROJECT_ID",
//   storageBucket:     "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId:             "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
