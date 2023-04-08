// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCRfozAkhXNeWIQGSKzf7Z5HDw5YThF_SU",
      authDomain: "project94-53c15.firebaseapp.com",
      databaseURL: "https://project94-53c15-default-rtdb.firebaseio.com",
      projectId: "project94-53c15",
      storageBucket: "project94-53c15.appspot.com",
      messagingSenderId: "987430953857",
      appId: "1:987430953857:web:aabcc4fe8cb3d65161be80"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("Username");
  document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

  function addroom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
           purpose: "Adding Room Name"
     });

     localStorage.setItem("Roomname",room_name);
 
     window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
//Start code
     console.log("room_name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML += row;
//End code
});});}
getData();
function redirectToroomname(name){
console.log(name);
localStorage.setItem("Roomname",name);
window.location = "kwitter_page.html";
}
function logout() {
localStorage.removeItem("Username");
localStorage.removeItem("Roomname");
window.location = "index.html";
}