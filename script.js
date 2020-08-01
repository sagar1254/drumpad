 let pads = document.querySelectorAll('.pad');
 console.log(pads);

pads.forEach(pad => {
  pad.addEventListener('click', () => playNote(pad));
})


function playNote(pad) {
    console.log("click");
    
    const noteAudio = document.getElementById(pad.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    
    pad.classList.add('active');

     noteAudio.addEventListener('ended', () => {
    pad.classList.remove('active');
    })

}


