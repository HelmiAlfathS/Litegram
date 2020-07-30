import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAclpjwHoco4XD9ZPO8AqCemRY3WAyfPrE',
  authDomain: 'litegram-4ac41.firebaseapp.com',
  databaseURL: 'https://litegram-4ac41.firebaseio.com',
  projectId: 'litegram-4ac41',
  storageBucket: 'litegram-4ac41.appspot.com',
  messagingSenderId: '77442254006',
  appId: '1:77442254006:web:bbd5799a49e9f5cf679217',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Init instance Storage & Firestore ... firestor is our db repressnt to file, storage is storage for uploaded
const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export
export { projectStorage, projectFireStore, timestamp };
