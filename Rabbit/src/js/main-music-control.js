//Временнный файл, чтобы небыло багов с плеером на главной странице
const volume = document.querySelector(".music-player__song-volume"),
	mySlider = document.querySelector(".music-player__slider");

const slider = () => {
    mySlider.style.background = `linear-gradient(to right, #2396ff 100%, rgb(100, 116, 139) 100%)`;
	volume.firstElementChild.src = `../../img/music-icon/volume.svg`;
	volume.firstElementChild.alt = `sound-on`;
}
slider();

const changesForMediumDevices = () => {
	if (window.matchMedia('(max-width: 1023px)').matches) {
		document.querySelector(".music-player__song-volume-wrapper").style.display="none";
		document.querySelector(".music-player__progress-song-wrapper").style.display="none";
		document.querySelector(".music-player__song-progress-area-for-small-devices").style.display="block";
		document.querySelector(".music-player__song-progress-area-for-small-devices").style.borderRadius="0";
	}
};
changesForMediumDevices();





