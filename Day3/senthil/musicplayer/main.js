//true - playing State
//false - Pause State
const address = { //Object Vairable
  doorNumber: 20,
  streetName: "Gangai Amman Kovil",
  pincode: 600045,
};

const MUSIC_PLAYER_STATE = { //Object Variable
  PLAY: "play",
  PAUSE: "pause",
  LOADING: "loading",
};

let musicPlayerState = MUSIC_PLAYER_STATE.PAUSE; // String Variable

//Normal/ Tradition Function
function render() {
  const pauseBox = document.getElementById("pause");

  pauseBox.setAttribute("style","display:none;")
 
}

render();
