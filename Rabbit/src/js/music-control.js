const musicPalyer = document.querySelector(".music-player"),
	progressArea = musicPalyer.querySelector(".music-player__song-progress-area"),
	progressBar = progressArea.querySelector(".music-player__song-progress"),
	musicImg = musicPalyer.querySelector(".music-player__song-img"),
	musicName = musicPalyer.querySelector(".music-player__song-name"),
	musicAuthor = musicPalyer.querySelector(".music-player__song-author"),
	mainAudio = musicPalyer.querySelector("#main-audio"),
	musicPrev = musicPalyer.querySelector(".music-player__prev-song"),
	musicNext = musicPalyer.querySelector(".music-player__next-song"),
	musicPlayPause = musicPalyer.querySelector(".music-player__play-pause"),
	volume = musicPalyer.querySelector(".music-player__song-volume"),
	mySlider = document.querySelector(".music-player__slider");
 
//Animation text(name song, artist)
const animationTxt = () => {
	const txtWrapper = document.querySelector(".music-player__txt-wrapper")
	if (txtWrapper.offsetWidth <= txtWrapper.firstElementChild.firstElementChild.offsetWidth) {
		txtWrapper.firstElementChild.firstElementChild.style.animation = "5s cubic-bezier(0, 0.18, 1, 0.73) 1s infinite normal none running slidein";
	} else {
		txtWrapper.firstElementChild.firstElementChild.style.animation = "";
	}
	if (txtWrapper.offsetWidth <= txtWrapper.lastElementChild.firstElementChild.offsetWidth) { //text > 22 symbols
		txtWrapper.lastElementChild.firstElementChild.style.animation = "";
		txtWrapper.lastElementChild.firstElementChild.style.animation = "5s cubic-bezier(0, 0.18, 1, 0.73) 1s infinite normal none running slidein";
	} else {
		txtWrapper.lastElementChild.firstElementChild.style.animation = "";
	}
};

let musicIndex = allMusic.length;

const loadMusic = indexNumb => {
	musicName.innerText = `${allMusic[indexNumb - 1].name}`;
	musicAuthor.innerText = allMusic[indexNumb - 1].artist;
	musicImg.src = `img/music-img/${allMusic[indexNumb - 1].img}.webp`;
	musicImg.alt = `${allMusic[indexNumb - 1].img}`;
	mainAudio.src = `music/${allMusic[indexNumb - 1].src}.mp3`;
	animationTxt();
};

const playMusic = () => {
	musicPalyer.classList.add("paused");
	musicPlayPause.firstElementChild.src = `img/music-icon/pause.svg`;
	musicPlayPause.firstElementChild.alt = `pause`;
	mainAudio.play();
};

const pauseMusic = () => {
	musicPalyer.classList.remove("paused");
	musicPlayPause.firstElementChild.src = `img/music-icon/play.svg`;
	musicPlayPause.firstElementChild.alt = `play`;
	mainAudio.pause();
};

const prevMusic = () =>{
	musicIndex--; //decrement of musicIndex by 1
	//if musicIndex is less than 1 then musicIndex will be the array length so the last music play
	musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
	loadMusic(musicIndex);
	playMusic();	
};

const nextMusic = () => {
	musicIndex++; //increment of musicIndex by 1
	//if musicIndex is greater than array length then musicIndex will be 1 so the first music play
	musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
	loadMusic(musicIndex);
	playMusic();
};

const playPauseSong = () => {
	const isMusicPlay = musicPalyer.classList.contains("paused");
	//if isPlayMusic is true then call pauseMusic else call playMusic
	isMusicPlay ? pauseMusic() : playMusic();
};

// update progress bar width according to music current time
const updateProgressBar = (e) => {
	const currentTime = e.target.currentTime; //getting playing song currentTime
	const duration = e.target.duration; //getting playing song total duration
	let progressWidth = (currentTime / duration) * 100;
	progressBar.style.width = `${progressWidth}%`;
  
	let musicCurrentTime = musicPalyer.querySelector(".music-player__current-time"),
	musicDuartion = musicPalyer.querySelector(".music-player__max-duration");
	mainAudio.addEventListener("loadeddata", () => {
		// update song total duration
		let mainAdDuration = mainAudio.duration;
		let totalMin = Math.floor(mainAdDuration / 60);
		let totalSec = Math.floor(mainAdDuration % 60);
		if(totalSec < 10){ //if sec is less than 10 then add 0 before it
			totalSec = `0${totalSec}`;
		}
		musicDuartion.innerText = `${totalMin}:${totalSec}`;
	});
	// update playing song current time
	let currentMin = Math.floor(currentTime / 60);
	let currentSec = Math.floor(currentTime % 60);
	if(currentSec < 10){ //if sec is less than 10 then add 0 before it
	  	currentSec = `0${currentSec}`;
	}
	musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
};

// update playing song currentTime on according to the progress bar width
const updateTimeCurrentSong = (e) => {
	let progressWidth = progressArea.clientWidth; //getting width of progress bar
	let clickedOffsetX = e.offsetX; //getting offset x value
	let songDuration = mainAudio.duration; //getting song total duration
	
	mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
	playMusic(); //calling playMusic function
};

//line slider
const slider = () => {
    valPercent = (mySlider.value / mySlider.max)*100;
    mySlider.style.background = `linear-gradient(to right, #2396ff ${valPercent}%, rgb(100, 116, 139) ${valPercent}%)`;
	mainAudio.volume = mySlider.value / 100; 
}
slider();

let isMusicWithSound = true;

const OffOnSound = () => {
	if (isMusicWithSound) {
		isMusicWithSound = false;
		volume.firstElementChild.src = `img/music-icon/no-volume.svg`;
		volume.firstElementChild.alt = `sound-off`;
		mainAudio.volume = 0;
	} else {
		isMusicWithSound = true;
		volume.firstElementChild.src = `img/music-icon/volume.svg`;
		volume.firstElementChild.alt = `sound-on`;
		mainAudio.volume = mySlider.value / 100;
	}
};

const changesForMediumDevices = () => {
	if (window.matchMedia('(max-width: 1023px)').matches) {
		progressArea.removeEventListener("click", updateTimeCurrentSong);

		document.querySelector(".music-player__song-volume-wrapper").style.display="none";
		document.querySelector(".music-player__progress-song-wrapper").style.display="none";
		document.querySelector(".music-player__song-progress-area-for-small-devices").style.display="block";
	}
};

window.addEventListener("load", () => loadMusic(musicIndex));
musicPlayPause.addEventListener("click", playPauseSong);
musicPrev.addEventListener("click", prevMusic);
musicNext.addEventListener("click", nextMusic);
mainAudio.addEventListener("timeupdate", updateProgressBar);
progressArea.addEventListener("click", updateTimeCurrentSong);
mainAudio.addEventListener("ended", nextMusic); //code for what to do after song ended
mySlider.addEventListener("input", slider); //transfornm sound
volume.addEventListener("click", OffOnSound);

changesForMediumDevices();
