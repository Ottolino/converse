const firebaseConfig = {
    apiKey: "AIzaSyC1ys-t2zkPfO5S9yxm7GE-Id0Jqn9JWk8",
    authDomain: "converse---otto.firebaseapp.com",
    databaseURL: "https://converse---otto-default-rtdb.firebaseio.com",
    projectId: "converse---otto",
    storageBucket: "converse---otto.appspot.com",
    messagingSenderId: "775846538752",
    appId: "1:775846538752:web:f416725ddf9ead1ab1b2e5"
  };

firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "bom dia, boa  noite " + user_name + "!";

  function addRoom()
  { 
     room_name = document.getElementById("room_name").value;

     firebase.database().ref("/").child(room_name).update({
         purpose : "adding nome sala"
        });

         localStorage.setItem("room_name", room_name);
        
         window.location = "kwitter_page.html";
        }
        function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
           row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
           document.getElementById("output").innerHTML += row;
         });
       });
     
     }


    getData();

    function redirectToRoomName(name) 
    { 
         console.log(name);
         localStorage.setItem("room_name", name);
           window.location = "kwitter_page.html";
         }

         function logout() {
         localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
           window.location = "index.html"
           }