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

let songIndex = 0;

function createButton() {
  const button = document.createElement("button");
  const parent = document.getElementById("controls");
  parent.appendChild(button);
  return button;
}

function initializeButton(button, textContentData, displayData) {
  button.textContent = textContentData;
  button.style.display = displayData;
}

const whatToDoOnClick = (buttonA, buttonB) => {
  return () => {
    buttonA.style.display = "none";
    buttonB.style.display = "block";
  };
}

function addInteractivity(buttonA, buttonB) {
  buttonA.addEventListener("click", whatToDoOnClick(buttonA,buttonB));
}

function initializeView() {
  //do some tasks
  //creating
  //const playButon = createButton();
  const playButon = document.getElementById("play")
  initializeButton(playButon, "Play", "block");

  //const pauseButon = createButton();
  const pauseButon = document.getElementById("pause")
  initializeButton(pauseButon, "Pause", "none");

  addInteractivity(playButon, pauseButon);
  addInteractivity(pauseButon, playButon);
}

initializeView();

//render();
