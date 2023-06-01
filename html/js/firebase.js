let firebaseConfig = {
  apiKey: "AIzaSyCXoi3hD20lpqV7xUO8u0eGI88vyZ9k-EE",
  authDomain: "blog-52108.firebaseapp.com",
  projectId: "blog-52108",
  storageBucket: "blog-52108.appspot.com",
  messagingSenderId: "328877264216",
  appId: "1:328877264216:web:40cea09c3a15525341692d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db= firebase.firestore();