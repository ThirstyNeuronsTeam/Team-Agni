const state = 0; //0 means pause 1 means play

const songs = [
  {
    id: "song1",
    songPath: "music/hey.mp3",
    imagePath: "images/hey.jpg",
    title: "hey",
  },
  {
    id: "song2",
    songPath: "music/summer.mp3",
    imagePath: "images/summer.jpg",
    title: "summer",
  },
  "song3",
];

let songIndex = 0;


function playSong(){

  console.log("play song funciton is triggered")
  //take the audio element
  const musicAudio = document.getElementById("musicAudio")
  
  //get the current song based on pointer
  const currentSong = songs[songIndex]

  //set the current song path as the source - src attribute
  musicAudio.setAttribute("src",currentSong.songPath)

  //because autoplay is off , trigger manually
  musicAudio.play();
}

function nextSong(){

}

let rotationValue = 30

function onWindowsMouseMove(){

  console.log("hey mouse is moving")
  //take the image element
  const coverPhoto = document.getElementById("coverPhoto")
  //and rotate
  //coverPhoto.setAttribute("style","transform:rotate(45deg)")
  //coverPhoto.style.transform = "rotate(" + rotationValue + "deg)"

  rotationValue = rotationValue + 10;
}

window.addEventListener("mousemove",onWindowsMouseMove)
