// console.log("welcome to spotify");
// initialize the variables
let songindex = 0;
let audioelement = new Audio("songs/1.mp3");
let masterplay = document.getElementById('masterplay');
let mpb = document.getElementById('myprogressbar')
let gif = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songitem'));
let masterSongName = document.getElementById('master');
let song = [
    { songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg" },
    { songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg" },
    { songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg" },
    { songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg" },
    { songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg" },
]
songitems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = song[i].coverPath;
    element.getElementsByClassName('songname')[0].innerText = song[i].songName;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause')
        audioelement.src = `songs/${songindex + 1}.mp3`
        masterSongName.innerText = song[songindex].songName
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
    })
})




// handle play/pause button
masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioelement.pause();
        masterplay.classList.add('fa-circle-play');
        masterplay.classList.remove('fa-circle-pause');
        gif.style.opacity = 0;

    }
})
//listen to events
audioelement.addEventListener('timeupdate', () => {
    //update seekbar
    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100)
    mpb.value = progress;
})

mpb.addEventListener("change", () => {
    audioelement.currentTime = mpb.value * audioelement.duration / 100;
})
document.getElementById('previous').addEventListener('click', () => {
    if (songindex <= 0) {
        songindex = 0;
    }
    else {
        songindex -= 1;
    }
    audioelement.src = `songs/${songindex + 1}.mp3`
    masterSongName.innerText = song[songindex].songName
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-circle-pause');
    masterplay.classList.add('fa-circle-play');

})
document.getElementById('next').addEventListener('click', () => {
    if (songindex >= 9) {
        songindex = 0;
    }
    else {
        songindex += 1;
    }
    audioelement.src = `songs/${songindex + 1}.mp3`
    masterSongName.innerText = song[songindex].songName
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-circle-pause');
    masterplay.classList.add('fa-circle-play');

})