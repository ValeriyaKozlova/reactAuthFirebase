import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FAREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FAREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FAREBASE_DETABASE_URL,
    projectId: process.env.REACT_APP_FAREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FAREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FAREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FAREBASEAPP_ID
})

export const auth = app.auth()
export default app