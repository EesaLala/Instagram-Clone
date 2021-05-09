import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyBpCzU4giN1M-ARZn3u0jwiHowA5EBLQhw",
    authDomain: "instagram-clone-615e8.firebaseapp.com",
    projectId: "instagram-clone-615e8",
    storageBucket: "instagram-clone-615e8.appspot.com",
    messagingSenderId: "871797964313",
    appId: "1:871797964313:web:81dca753226b38abbf3488"
  };

 const firebase = Firebase.initializeApp(config);
 const { FieldValue } = Firebase.firestore;

//  seedDatabase(firebase)

 export { firebase, FieldValue}