const app = () => {
    const song =  document.querySelector('.song');
    const play = document.querySelector('.play');
    const outline = document.querySelector('.moving-outline circle');
    const video = document.querySelector('.vid-container video')

    //Sounds
    const sounds = document.querySelectorAll('.sound-picker button');
    //Time display
    const timeDisplay = document.querySelector('.time-display');
    //Outline length
    const outlineLength = outline.getTotalLength();
    
    //Duration
    let fDuration = 500;

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

    //play song
    play.addEventListener("click", () =>{
        checkPlaying(song);
    });

    //stop and play song
    const checkPlaying = song =>{
        if(song.paused){
            song.play();
            video.play();
            play.src = './svg/pause.svg';
        }else{
            song.pause();
            video.pause();
            play.src = './svg/play.svg';
        }
    } 
};

app();