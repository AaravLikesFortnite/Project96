//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAa0qXM43jjCH9jfRNAf0LDjZQ7V2nyrSQ",
    authDomain: "let-s-chat-7abf9.firebaseapp.com",
    databaseURL: "https://let-s-chat-7abf9-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-7abf9",
    storageBucket: "let-s-chat-7abf9.appspot.com",
    messagingSenderId: "929686378339",
    appId: "1:929686378339:web:91e13ad2c610a1f3a22556"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

room_name=localStorage.getItem("room_name");
user_name=localStorage.getItem("User_name");

function Send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          like:0,
          message:msg,
          name:user_name
    });
    document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function Logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}