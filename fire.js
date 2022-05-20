var firebase = require('firebase')
// change lines below with your own Firebase snippets!
var config = {
  
  apiKey: "AIzaSyDTd38n3qN9zBGCSlsRK-rX20dS0BSKEvE",
  authDomain: "esp32-39fd0.firebaseapp.com",
  databaseURL: "https://esp32-39fd0-default-rtdb.firebaseio.com",
  projectId: "esp32-39fd0",
  storageBucket: "esp32-39fd0.appspot.com",
  messagingSenderId: "935208488997",
  appId: "1:935208488997:web:542f75a0b4c6ed25c02fcc",
  measurementId: "G-322PVVDPMQ"
};
const fire = firebase.initializeApp(config);
module.exports = fire;