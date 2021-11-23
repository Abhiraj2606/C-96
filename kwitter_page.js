//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDys3oqyzwFy8VORcsMlpJ9f8eA8gEodHc",
      databaseURL: "https://kwitter-6d415-default-rtdb.firebaseio.com/",
      authDomain: "kwitter-6d415.firebaseapp.com",
      projectId: "kwitter-6d415",
      storageBucket: "kwitter-6d415.appspot.com",
      messagingSenderId: "1009225249741",
      appId: "1:1009225249741:web:b47fcc4c1e874edd708a84"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name = localStorage.getItem("user_name");
     room_name = localStorage.getItem("room_name");

     function send()
     {
           msg = document.getElementById("msg").value;
           firebase.database().ref(room_name).push({
                 name:user_name,
                 message:msg,
                 like:0
           });
           document.getElementById("msg").value = "";
     }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
