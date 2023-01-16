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
}

app();