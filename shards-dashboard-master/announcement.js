// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkAGEnX8HDW49MP1rfkN2uWL7DSpe_JDk",
    authDomain: "admindb-511ff.firebaseapp.com",
    projectId: "admindb-511ff",
    storageBucket: "admindb-511ff.appspot.com",
    messagingSenderId: "824969765587",
    appId: "1:824969765587:web:8fa237c132c87e347d2a26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const formControl = document.getElementById('formControl').value;
const editorContainer = document.getElementById('editorContainer').value;

const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault()
    alert('yes')
})