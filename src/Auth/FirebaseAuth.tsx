import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: `${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
  projectID: process.env.FIREBASE_PROJECT_ID,
  torageBucket: `${process.env.FIREBASE_PROJECT_ID}.appspot.com`,
  messaingSenderID: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measerumentId: `G-${process.env.FIREBASE_MEASUREMENT_ID}`
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
