const containerTrack = document.querySelector(".track-list");
allMusic.forEach((music, i) => {
    containerTrack.firstElementChild.innerHTML += `
        <div class="track">
            <div class="track__info">
                <div class="track__number">${i+1}</div>
                <div class="track__img-wrapper">
                    <img src="../../img/music-img/${music.img}.webp" alt="${music.img}" class="track__img">
                </div>
                <div class="track__txt-wrapper">
                    <h2 class="track__name">${music.name}</h2>
                    <h2 class="track__author">${music.artist}</h2>
                </div>
            </div>

            <div class="track__control">
                <button class="track__favorites-button">
                    <img class="track__favorites-icon" src="../../img/music-icon/empty-heart.svg" alt="favorites">
                </button>
                <a class="track__download-button" href="../../music/${music.src}.mp3" download>
                    <img class="track__download-icon" src="../../img/music-icon/download.svg" alt="download">
                </a>
            </div>
        </div>
    `;
});

const heart = document.querySelector(".track__favorites-button");

let addedToFavorites = true;

heart.addEventListener("click", () => {
    heart.firstElementChild.src.includes("empty-heart") ? heart.firstElementChild.src = `../../img/music-icon/heart.svg` : heart.firstElementChild.src = `../../img/music-icon/empty-heart.svg`;
});