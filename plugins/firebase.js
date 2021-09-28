import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyC8nxIlMSGwhjtsnCPIJip03C4VF1wjwis',
  authDomain: 'port-folio-forum.firebaseapp.com',
  projectId: 'port-folio-forum',
  storageBucket: 'port-folio-forum.appspot.com',
  messagingSenderId: '1072993632283',
  appId: '1:1072993632283:web:88fe6fe5b915bda0d378be',
  measurementId: 'G-5525T0ELJ7'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
