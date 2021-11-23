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
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcom"+ user_name+"!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}

getData(); 

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
        window.location = "index.html";
}