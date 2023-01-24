exports.__esModule = true;
exports.provider = exports.auth = void 0;
// Import the functions you need from the SDKs you need
var app_1 = require("firebase/app");
var auth_1 = require("firebase/auth");
var firebaseConfig = {
    apiKey: "AIzaSyBAMAqIoxh3QAH61X27zRz8qowYYV9A7Lc",
    authDomain: "chat-app-pedrotech.firebaseapp.com",
    projectId: "chat-app-pedrotech",
    storageBucket: "chat-app-pedrotech.appspot.com",
    messagingSenderId: "400284695912",
    appId: "1:400284695912:web:fe1f4ae26ce88b1c672add"
};
// Initialize Firebase
var app = (0, app_1.initializeApp)(firebaseConfig);
exports.auth = (0, auth_1.getAuth)(app);
exports.provider = new auth_1.GoogleAuthProvider();
