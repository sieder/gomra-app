import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBCzwm7kXAwd9wj_5xzNudgeaZ7JnyvX7o",
  authDomain: "gomra-app-415e1.firebaseapp.com",
  databaseURL: "https://gomra-app-415e1.firebaseio.com",
  projectId: "gomra-app-415e1",
  storageBucket: "",
  messagingSenderId: "895778560871",
  appId: "1:895778560871:web:b03f69399348da2e3a6dc2"
}

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase