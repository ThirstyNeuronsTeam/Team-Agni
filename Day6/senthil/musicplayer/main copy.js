//true - playing State
//false - Pause State

let pauseButton;
let playButton;

const MUSIC_PLAYER_STATE = {
  //Object Variable
  PLAY: "play",
  PAUSE: "pause",
  LOADING: "loading",
};

let musicPlayerState = MUSIC_PLAYER_STATE.PAUSE; // String Variable

//Normal/ Tradition Function
//function render() {
//const pauseBox = document.getElementById("pause");
//pauseBox.setAttribute("style","display:none;")
//}

//Creation
function createPlayButton() {
  playButton = document.createElement("button");
  const parent = document.getElementById("controls");
  parent.appendChild(playButton);
}
//Initilization
function initializePlayButton() {
  playButton.style.display = "block"
  playButton.textContent = "Play";
}
//Adding Event
function addInteractiviyToPlayButton() {
  playButton.addEventListener("click", () => {
    playButton.style.display = "none";
    pauseButton.style.display = "block";
  });
}


//Creation
function createPauseButton() {
  pauseButton = document.createElement("button");
  const parent = document.getElementById("controls");
  parent.appendChild(pauseButton);
}
//Initilization
function initializePauseButton() {
  pauseButton.style.display = "none";
  pauseButton.textContent = "Pause";
}
//Adding Event
function addInteractiviyToPauseButton() {
  pauseButton.addEventListener("click", () => {
    playButton.style.display = "block";
    pauseButton.style.display = "none";
  });
}

function initializeView() {
  //do some tasks
  //creating
  createPlayButton();
  initializePlayButton();
  addInteractiviyToPlayButton();

  createPauseButton();
  initializePauseButton();
  addInteractiviyToPauseButton();
}

initializeView();

//render();
