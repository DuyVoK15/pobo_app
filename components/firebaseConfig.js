import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlDXPMToaqS_ddT7K1DDPkdJF_ZmUsp9A",
  authDomain: "pobo-79f66.firebaseapp.com",
  projectId: "pobo-79f66",
  storageBucket: "pobo-79f66.appspot.com",
  messagingSenderId: "811648357826",
  appId: "1:811648357826:web:16bad24b11060a0ae0325b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//iOS: 837556967672-5osd8v9nvm823pjoefnh87hl31pa6lms.apps.googleusercontent.com
//Android: 837556967672-omhari5oa1el8grsr443sbs9rjt3tn6m.apps.googleusercontent.com
