let playlist = ['Songs/31-Natalie-Holt-History-Is-Now-PSEGIR.mp3','Songs/Arjan Vailly Animal 320 Kbps.mp3', 
'Songs/Tom_Petty_Love_is_a_long_road.mp3','Songs/Jai-Sulthan-MassTamilan.io.mp3','Songs/Porkanda-Singam-MassTamilan.so.mp3',
'Songs/[YT2mp3.info] - Con La Brisa (From __Black Panther_ Wakanda Forever - Music From and Inspired By___Visual... (320kbps).mp3',
'Songs/1-2Hooks-Loki--Glorious--V8NY1P.mp3', 'Songs/1-Daniel-Pemberton-Across-the-Spid-Z2HUXM.mp3',
'Songs/02. The Weeknd - Blinding Lights.flac', 'Songs/05. The Weeknd, Daft Punk - I Feel It Coming.flac',
'Songs/06. The Weeknd, Daft Punk - Starboy.flac','Songs/07. The Weeknd, Kendrick Lamar - Pray For Me.flac',
'Songs/Metro-Boomin-Am-I-Dreaming-Ft-A-AP-Rocky-Roisee-(HiphopMood.com).mp3','Songs/07. The Weeknd, Kendrick Lamar - Pray For Me.flac',
'Songs/Metro-Boomin-Calling-Spider-Man-Across-the-Spider-Verse-Ft-Swae-Lee-NAV-A-Boogie-wit-da-Hoodie-(HiphopMood.com).mp3']

let soundtrackPosters = {
    'Songs/31-Natalie-Holt-History-Is-Now-PSEGIR.mp3':'soundtrackPosters/loki__season_2_soundtrack.jpg',
    'Songs/1-2Hooks-Loki--Glorious--V8NY1P.mp3':'soundtrackPosters/loki__season_2_soundtrack.jpg',
    'Songs/Arjan Vailly Animal 320 Kbps.mp3': 'soundtrackPosters/Animal-Movie-Ranbir-First-Look.jpeg',
    'Songs/05. The Weeknd, Daft Punk - I Feel It Coming.flac':'soundtrackPosters/The-Weekend.png',
    'Songs/02. The Weeknd - Blinding Lights.flac':'soundtrackPosters/The-Weekend.png',
    'Songs/06. The Weeknd, Daft Punk - Starboy.flac':'soundtrackPosters/The-Weekend.png',
    'Songs/07. The Weeknd, Kendrick Lamar - Pray For Me.flac':'soundtrackPosters/The-Weekend.png',
    'Songs/Metro-Boomin-Calling-Spider-Man-Across-the-Spider-Verse-Ft-Swae-Lee-NAV-A-Boogie-wit-da-Hoodie-(HiphopMood.com).mp3':'soundtrackPosters/spidermanAcrossTheSpiderVerse_Cover.webp',
    'Songs/Metro-Boomin-Am-I-Dreaming-Ft-A-AP-Rocky-Roisee-(HiphopMood.com).mp3':'soundtrackPosters/spidermanAcrossTheSpiderVerse_Cover.webp',
    'Songs/1-Daniel-Pemberton-Across-the-Spid-Z2HUXM.mp3':'soundtrackPosters/spidermanAcrossTheSpiderVerse_Cover.webp',
    'Songs/07. The Weeknd, Kendrick Lamar - Pray For Me.flac':'soundtrackPosters/The-Weekend.png',
    'Songs/Porkanda-Singam-MassTamilan.so.mp3':'soundtrackPosters/vikram_soundtrack.jpg',
    'Songs/Tom_Petty_Love_is_a_long_road.mp3':'soundtrackPosters/Love_is_a_long_road.png',
    'Songs/Jai-Sulthan-MassTamilan.io.mp3':'soundtrackPosters/Sulthan_soundtrack_cover.jpg',
    'Songs/[YT2mp3.info] - Con La Brisa (From __Black Panther_ Wakanda Forever - Music From and Inspired By___Visual... (320kbps).mp3':
    'soundtrackPosters/Wakanda_Forever.png',
}

let currentInd = 0;

var gameMusic = new Audio(playlist[currentInd]);
let play = document.getElementById('play');
let pause = document.getElementById('pause');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let body = document.getElementById('body');
let songDesc = document.getElementById('songName');
let songHeading = document.getElementById('songHeading');
let albumArt = document.getElementById('albumArt');


function showImage(){
    albumArt.innerHTML = ' ';
    let currentMusic = playlist[currentInd];
    if(soundtrackPosters[currentMusic])
    {
        let image = document.createElement('img');
        image.src = soundtrackPosters[currentMusic];
        image.width = 500;
        image.height = 500;
        image.classList.add('centered-image');
        songDesc.appendChild(image);
    }
}

function displaySongName(){
    songDesc.innerHTML = playlist[currentInd];
    songHeading.innerHTML = "NOW PLAYING";
}

function playMusic(){
    gameMusic.play();
    displaySongName();
    showImage();

}

function pauseMusic(){
    gameMusic.pause();
    songDesc.innerHTML = playlist[currentInd];
    songHeading.innerHTML = "SONG PAUSED";
    showImage();
}

function playNext(){
    if(currentInd<playlist.length){
    currentInd = (currentInd+1) % playlist.length;
    gameMusic.src = playlist[currentInd];
    gameMusic.play();
    displaySongName()
    showImage();
    }
}

function prevMusic(){
    if(currentInd>0){
    currentInd = (currentInd-1) % playlist.length;
    gameMusic.src = playlist[currentInd];
    gameMusic.play();
    displaySongName()
    showImage();
    }
}

gameMusic.addEventListener('ended',playNext);
play.addEventListener('click',playMusic);
pause.addEventListener('click',pauseMusic);
next.addEventListener('click',playNext);
prev.addEventListener('click',prevMusic);
