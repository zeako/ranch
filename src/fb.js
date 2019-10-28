import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseApiKey = process.env.FIREBASE_API_KEY

const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: 'ranch-6f5dc.firebaseapp.com',
  databaseURL: 'https://ranch-6f5dc.firebaseio.com',
  projectId: 'ranch-6f5dc',
  storageBucket: 'ranch-6f5dc.appspot.com',
  messagingSenderId: '701804186237',
  appId: '1:701804186237:web:8381fffe4b74836535ff14'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export default db
