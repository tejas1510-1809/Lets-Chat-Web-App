
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAvJrhXqevJIlLnuWvFcXP3lLGmWrV9LHc",
      authDomain: "kwitter-bd0ba.firebaseapp.com",
      databaseURL: "https://kwitter-bd0ba-default-rtdb.firebaseio.com",
      projectId: "kwitter-bd0ba",
      storageBucket: "kwitter-bd0ba.appspot.com",
      messagingSenderId: "145984367369",
      appId: "1:145984367369:web:4ebd2bde90fcec31cc41d8"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
