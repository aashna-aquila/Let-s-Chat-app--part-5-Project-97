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
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send()
    {
    message= document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:message,
          like:0
    });
    document.getElementById("msg").value="";

    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         name = message_data['name'];
         message = message_data['message']; 
         like = message_data['like']; 
         name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>";
          message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"; 
          like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"; 
          span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>"; 
          row = name_with_tag + message_with_tag +like_button + span_with_tag; document.getElementById("output").innerHTML += row;
      } });  }); }
getData();

function updateLike(message_id)
{
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;
firebase.database().ref(room_name).child(message_id).update({ like: updated_likes });

}