console.log("Welcome to Spotify")

//initialize the variables
let songindex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById("masterPlay");

let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
let giff=document.getElementById("giff");
let mastersongname=document.getElementById("mastersongname");

let songitems=Array.from(document.getElementsByClassName("songitem"));
let songs=[
    {songname:"Tera Yarr Hoon Main",filepath:'songs/1.mp3',coverpath:'covers/1.jpg'},
    {songname:"Pal Pal Dil Ke Pass ",filepath:'songs/2.mp3',coverpath:'covers/2.jpg'},
    {songname:"Tum hi Ho",filepath:'songs/3.mp3',coverpath:'covers/3.jpg'},
    {songname:"Naina",filepath:'songs/4.mp3',coverpath:'covers/4.jpg'},
    {songname:"Humdard",filepath:'songs/5.mp3',coverpath:'covers/5.jpg'},
    {songname:"Girl I need You",filepath:'songs/6.mp3',coverpath:'covers/6.jpg'},
    {songname:"Hawayein",filepath:'songs/7.mp3',coverpath:'covers/7.jpg'},
    {songname:"Khairiyat",filepath:'songs/8.mp3',coverpath:'covers/8.jpg'},
    
]

songitems.forEach((element,i) => {
    // console.log(element,i);
    element.getElementsByTagName('img')[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
});

//handel play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
        giff.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
        giff.style.opacity=0;
    }
})

//listen to event
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    ///update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value=progress;

})
//when you click on the progress bar then it should change
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeallplays= ()=>{
   
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplays();
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songindex+1}.mp3`;
        mastersongname.innerText=songs[songindex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        giff.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
})


document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=7){
        songindex=0;
    }
    else{
        songindex+=1;
    }
    audioElement.src=`songs/${songindex+1}.mp3`;
    mastersongname.innerText=songs[songindex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
        giff.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex-=1;
    }
    audioElement.src=`songs/${songindex+1}.mp3`;
    mastersongname.innerText=songs[songindex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    giff.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

