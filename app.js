var config = {
  apiKey: "AIzaSyAZSHnTpwch3wGfnFXF9lBdI8_z5IH-57Y",
  authDomain: "home-control-aaf26.firebaseapp.com",
  databaseURL: "https://home-control-aaf26.firebaseio.com",
  storageBucket: "home-control-aaf26.appspot.com",
  messagingSenderId: "592463619461"
};
var app = firebase.initializeApp(config);

// Get a reference to the database service
var ref = app.database().ref('rooms');

ref.on("value", function(snapshot) {
  var rooms = snapshot.val();
  var root = document.getElementById('control-panel');
  var dom = rooms.map(makeRoomFromTemplate).join("")
  console.log(rooms);
  root.innerHTML = dom;

  function makeRoomFromTemplate(room, index) {
    const lights = room.lights !== "none" ? `
    <a class="panel-block is-active" href="#" onclick="toggleLights(${index},${room.lights})">
      <span class="panel-icon">
        <i class="fa fa-square${room.lights?'':'-o'}"></i>
      </span>
      Lys
    </a>` : '';
    const oven = room.oven !== "none" ? `
    <a class="panel-block is-active" href="#" onclick="toggleHeat(${index}, ${room.oven})">
      <span class="panel-icon">
        <i class="fa fa-square${room.oven?'':'-o'}"></i>
      </span>
      Varme
    </a>` : '';

    return `

    <nav class="panel">
      <p class="panel-heading">
        ${room.name}
      </p>
      ${lights}
      ${oven}
    </nav>
    `;
  }
});

function toggleLights(index, lights) {
  app.database().ref(`rooms/${index}/lights`).set(!lights)
}

function toggleHeat(index, oven) {
  app.database().ref(`rooms/${index}/oven`).set(!oven)
}
