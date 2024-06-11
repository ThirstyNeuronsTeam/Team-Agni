function MusicPlayer(id) {
  const actualParentElementId = "m" + id;
  const musicPlayerElement = document.getElementById(actualParentElementId);
  const playButton = musicPlayerElement.querySelector("#play");
  const pauseButton = musicPlayerElement.querySelector("#pause");
  const musicAudio = musicPlayerElement.querySelector("#musicAudio");
  let state = 0;
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

  const noOfSongs = songs.length;
  let songIndex = 0;

  function init() {
    playButton.disabled = false;
    pauseButton.disabled = true;
  }

  init();

  function playSong() {
    console.log("play song funciton is triggered");
    //take the audio element

    //get the current song based on pointer
    const currentSong = songs[songIndex];

    //set the current song path as the source - src attribute
    musicAudio.setAttribute("src", currentSong.songPath);

    //because autoplay is off , trigger manually
    musicAudio.play();
    state = 1;
    setCoverPhoto(songIndex);
    render();
  }
  function pauseSong() {
    console.log("pause song funciton is triggered");
    //take the audio element

    //get the current song based on pointer
    //const currentSong = songs[songIndex]

    //set the current song path as the source - src attribute
    //musicAudio.setAttribute("src",currentSong.songPath)

    //because autoplay is off , trigger manually
    musicAudio.pause();
    state = 0;
    render();
  }

  function nextSong() {
    console.log("Next song funciton is triggered");
    songIndex = songIndex + 1;
    if (songIndex > noOfSongs - 1) {
      songIndex = 0;
    }

    console.log("pause song funciton is triggered");
    playSong();
    //take the audio element
    /*  const musicAudio = document.getElementById("musicAudio")
    const currentSong = songs[songIndex]
      //set the current song path as the source - src attribute
    musicAudio.setAttribute("src",currentSong.songPath)
    //because autoplay is off , trigger manually
    musicAudio.play();
    playButton.disabled = false;
    pauseButton.disabled = true; */
    //getCoverPhoto(songIndex);
  }

  function prevSong() {
    console.log("Previous song funciton is triggered");
    songIndex = songIndex - 1;
    if (songIndex < 0) {
      songIndex = noOfSongs - 1; // if the first song is the current song and if previous is clicked, then loop to the last song
    }

    console.log("pause song funciton is triggered");
    playSong();
    //take the audio element
    /* const musicAudio = document.getElementById("musicAudio")
    const currentSong = songs[songIndex]
      //set the current song path as the source - src attribute
    musicAudio.setAttribute("src",currentSong.songPath)
    //because autoplay is off , trigger manually
    musicAudio.play();
    playButton.disabled = false;
    pauseButton.disabled = true; */
    //getCoverPhoto(songIndex);
  }
  function setCoverPhoto(songIndex) {
    document.getElementById("coverPhoto").src = songs[songIndex].imagePath;
  }

  function addInteractivity() {
    playButton.addEventListener("click", playSong);
    pauseButton.addEventListener("click", pauseSong);
  }

  addInteractivity();

  const render = () =>{
    if (state === 0) {
      playButton.disabled = true;
      pauseButton.disabled = false;
    } else {
      playButton.disabled = false;
      pauseButton.disabled = true;
    }
  }

  function removeEvents(){
    playButton.removeEventListener("click", playSong);
    pauseButton.removeEventListener("click", pauseSong);
  }

  function removeSelf(){
    musicPlayerElement.parentNode.removeChild(musicPlayerElement);
  }

  function dispose() {
    removeEvents();
    removeSelf();
  }

  return {
    dispose,
  };
}

const musicPlayer1 = MusicPlayer("1");

const musicPlayer2 = MusicPlayer("2");

function closeAllMusicPlayers() {
  musicPlayer1.dispose();
  musicPlayer2.dispose();
}
