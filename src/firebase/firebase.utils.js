import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDrx-z0nRlwG4Y_Bsw3utizPmGucrGG2og",
    authDomain: "gomra-app.firebaseapp.com",
    databaseURL: "https://gomra-app.firebaseio.com",
    projectId: "gomra-app",
    storageBucket: "",
    messagingSenderId: "147975736437",
    appId: "1:147975736437:web:e12bf79b420deceb6c7c3c"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase