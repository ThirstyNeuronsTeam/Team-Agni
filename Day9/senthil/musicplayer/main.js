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
  {
    id: "song3",
    songPath: "music/ukulele.mp3",
    imagePath: "images/ukulele.jpg",
    title: "ukulele",
  },
];
const noOfSongs = songs.length
let songIndex = 0;

document.getElementById("pause").disabled = true;
document.getElementById("play").disabled = false;


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
  document.getElementById("pause").disabled = false;
  document.getElementById("play").disabled = true;
  setCoverPhoto(songIndex);
}
function pauseSong(){

  console.log("pause song funciton is triggered")
  //take the audio element
  const musicAudio = document.getElementById("musicAudio")
  
  //get the current song based on pointer
  //const currentSong = songs[songIndex]

  //set the current song path as the source - src attribute
  //musicAudio.setAttribute("src",currentSong.songPath)

  //because autoplay is off , trigger manually
  musicAudio.pause();
  document.getElementById("pause").disabled = true;
  document.getElementById("play").disabled = false;
}

function nextSong(){
  console.log("Next song funciton is triggered")
  songIndex = songIndex+1
  if (songIndex > noOfSongs-1) {
  songIndex = 0
  }

  console.log("pause song funciton is triggered")
  playSong()
  //take the audio element
 /*  const musicAudio = document.getElementById("musicAudio")
  const currentSong = songs[songIndex]
    //set the current song path as the source - src attribute
  musicAudio.setAttribute("src",currentSong.songPath)
  //because autoplay is off , trigger manually
  musicAudio.play();
  document.getElementById("pause").disabled = false;
  document.getElementById("play").disabled = true; */
 //getCoverPhoto(songIndex);

}

function prevSong(){
  console.log("Previous song funciton is triggered")
  songIndex = songIndex-1
  if (songIndex < 0) {
  songIndex = noOfSongs-1 // if the first song is the current song and if previous is clicked, then loop to the last song
  }

  console.log("pause song funciton is triggered")
  playSong()
  //take the audio element
  /* const musicAudio = document.getElementById("musicAudio")
  const currentSong = songs[songIndex]
    //set the current song path as the source - src attribute
  musicAudio.setAttribute("src",currentSong.songPath)
  //because autoplay is off , trigger manually
  musicAudio.play();
  document.getElementById("pause").disabled = false;
  document.getElementById("play").disabled = true; */
  //getCoverPhoto(songIndex);

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

window.addEventListener("mousemove",onWindowsMouseMove);

function setCoverPhoto(songIndex) {
  document.getElementById("coverPhoto").src = songs[songIndex].imagePath;
}