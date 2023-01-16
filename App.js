const app = () => {
    const song =  document.querySelector('.song');
    const play = document.querySelector('.play');
    const outline = document.querySelector('.moving-outline circle');
    const video = document.querySelector('.vid-container video')

    //Sounds
    const sounds = document.querySelectorAll('.sound-picker button');
    //Time display
    const timeDisplay = document.querySelector('.time-display');
    const timeSelect = document.querySelectorAll('.time-select button');
    //Outline length
    const outlineLength = outline.getTotalLength();
    
    //Duration
    let fDuration = 300;

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

    //play song
    play.addEventListener("click", () =>{
        checkPlaying(song);
    });

    //select sound
    timeSelect.forEach(option => {
        option.addEventListener('click', function(){
            fDuration = this.getAttribute("data-time");
        });
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

    //animated the circle
    song.ontimeupdate = () =>{
        let currentTime = song.currentTime;
        let elapse = fDuration - currentTime;
        let seconds = Math.floor(elapse % 60);
        let minutes = Math.floor(elapse / 60);
    
    //animate the circle
    outline.style.strokeDashoffset = outlineLength - (currentTime/fDuration) * outlineLength;
    
    //animate the text
    timeDisplay.textContent = `${minutes}:${seconds}`;

    if(currentTime >= fDuration){
        song.pause();
        video.pause();
        play.src = './svg/play.svg';
        song.currentTime = 0;
    }
    }
};

app();