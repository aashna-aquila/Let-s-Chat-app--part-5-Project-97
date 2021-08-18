
  var firebaseConfig = {
      apiKey: "AIzaSyBZt5gaCyhp3SjbKLPa5ITxU2Qudxpzu5Y",
      authDomain: "let-s-chat-project-7c334.firebaseapp.com",
      databaseURL: "https://let-s-chat-project-7c334-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-project-7c334",
      storageBucket: "let-s-chat-project-7c334.appspot.com",
      messagingSenderId: "175334737063",
      appId: "1:175334737063:web:6c8a1b847c96dc7e160782",
      measurementId: "G-MY9BG01VBQ"
    };
    firebase.initializeApp(firebaseConfig);

    user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+ user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
    console.log(" Room Name- "+ Room_names);
    row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML=row;
      });});}
getData();

function addroom(){

  room_name= document.getElementById("input2").value;
  localStorage.setItem("room_name", room_name);
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
    });
    window.location="kwitter_page.html";
}

function redirectToRoomName(name)
{
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
  console.log(name);
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}