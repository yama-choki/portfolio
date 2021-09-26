import firebase from 'firebase'

const config = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
