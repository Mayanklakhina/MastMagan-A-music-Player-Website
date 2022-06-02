console.log("Welcome to MastMagan");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('/Music/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Swag Se Swagat - Vishal Dadlani, Neha Bhasin", filePath:"/Music/1.mp3", coverPath: "/Images/1.jpg"},
    {songName: "Bom Diggy Bom - Zack Knight, Jasmin Walia", filePath:"/Music/2.mp3", coverPath: "/Images/2.jpg"},
    {songName: "Kala Chashma - Amar Arshi, Neha Kakkar", filePath: "/Music/3.wav", coverPath: "/Images/3.jpg"},
    {songName: "Kar Gayi Chull - Badshah, Sukriti Kakkar", filePath:"/Music/4.mp3", coverPath: "/Images/4.jpg"},
    {songName: "Aaj ki Raat - Sonu Nigam, Alisha Chinai", filePath:"/Music/5.mp3", coverPath: "/Images/5.jpg"},
    {songName: "Disco Disco - Benny Dayal, Shirley Setia", filePath:"/Music/6.mp3", coverPath: "/Images/6.jpg"},
    {songName: "3 Peg - Sharry Maan", filePath:"/Music/6.mp3", coverPath: "/Images/3 peg.jpg"},
    {songName: "Paani Paani - Badshah, Aastha Gill", filePath:"/Music/paani.mp3", coverPath: "/Images/paani.jpg"},
    {songName: "Lehanga - Jass Manak", filePath:"/Music/2.mp3", coverPath: "/Images/lehanga.jpg"},
    {songName: "Brown Munde - AP Dhillon", filePath:"/Music/4.mp3", coverPath: "/Images/brown.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `/Music/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `/Music/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `/Music/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})